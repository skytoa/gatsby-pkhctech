import React from 'react';
import { 
  Container,
  Grid,
  makeStyles,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import { HeaderTitle } from '../../Typography';
import { removeLineBreak } from '../../../utilities/lineBreak';
import { useIntl } from "gatsby-plugin-intl";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import servicesBgDark from '../../../images/services/services_bg_dark.svg';
import servicesBgLight from '../../../images/services/services_bg_light.svg';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: theme.palette.type === "light" ? `url(${servicesBgLight})` : `url(${servicesBgDark})`,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
  paragraph: {
    fontSize: '36px',
    lineHeight: '60px',

    [theme.breakpoints.down('sm')]: {
      fontSize: '26px',
      lineHeight: '40px',
    },
  },
  grid__image: {
    textAlign: 'center',
  },
  factor: {
    paddingTop: '60px',
  },
  appDesign: {
    paddingBottom: '60px',
    marginBottom: 0,
    
    '& div': {
      '&:nth-child(1)': {
        order: 0,
  
        [theme.breakpoints.down('sm')]: {
          order: 1,
        },
      }
    }
  }
}));

const LandingOurServices = () => {
  const classes = useStyles();
  const intl = useIntl();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const data = useStaticQuery(graphql`
    query {
      factoryImage: file(relativePath: { eq: "services/factory.png" }) {
        childImageSharp {
          fixed(width: 416) {
            ...GatsbyImageSharpFixed
          }
        }
      },
      appDesignImage: file(relativePath: { eq: "services/undraw_progressive_app_m9ms.png" }) {
        childImageSharp {
          fixed(width: 416) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const fomatMessage = id => {
    const str = intl.formatMessage({ id: id });

    if(matches) {
      return { __html: str }
    }

    return { __html: removeLineBreak(str) }
  }

  return (
    <Container maxWidth="lg">
      <HeaderTitle to="/services" title={intl.formatMessage({ id: "our_service.title" })} showMore />
      <div className={classes.root}>
        <Grid container spacing={3} alignItems="center" className={classes.factor}>
          <Grid item xs={12} sm={12} md={6} className={classes.grid__image}>
          <Img 
            fixed={data.factoryImage.childImageSharp.fixed}
            imgStyle={{ objectFit: 'contain' }}
          />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <p className={classes.paragraph} dangerouslySetInnerHTML={fomatMessage('our_service.desc_one')} />
          </Grid>
        </Grid>
        <Grid container spacing={3} alignItems="center" className={classes.appDesign}>
          <Grid item xs={12} sm={12} md={6}>
            <p className={classes.paragraph} dangerouslySetInnerHTML={fomatMessage('our_service.desc_two')} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} className={`${classes.grid__image}`}>
            <Img 
              fixed={data.appDesignImage.childImageSharp.fixed}
              imgStyle={{ objectFit: 'contain' }}
            />
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}

export default LandingOurServices;

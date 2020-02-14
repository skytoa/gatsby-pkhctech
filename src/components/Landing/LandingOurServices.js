import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { HeaderTitle } from '../Typography';
import { useIntl } from "gatsby-plugin-intl";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
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
  }
}));

const LandingOurServices = () => {
  const intl = useIntl();
  const classes = useStyles();

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

  return (
    <>
      <HeaderTitle to="/services" title={intl.formatMessage({ id: "our_service.title" })} showMore />
      <div className={classes.root}>
        <Grid container spacing={3} alignItems="center" >
          <Grid item xs={12} sm={12} md={6} className={classes.grid__image}>
          <Img 
            fixed={data.factoryImage.childImageSharp.fixed}
            imgStyle={{ objectFit: 'contain' }}
          />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <p className={classes.paragraph}>{intl.formatMessage({ id: "our_service.desc_one" })}</p>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <p className={classes.paragraph}>{intl.formatMessage({ id: "our_service.desc_two" })}</p>
          </Grid>
          <Grid item xs={12} sm={12} md={6} className={classes.grid__image}>
            <Img 
              fixed={data.appDesignImage.childImageSharp.fixed}
              imgStyle={{ objectFit: 'contain' }}
            />
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default LandingOurServices;
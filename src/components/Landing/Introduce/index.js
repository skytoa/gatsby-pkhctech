import React from 'react';
import { useIntl } from "gatsby-plugin-intl";
import { makeStyles, Container } from '@material-ui/core';
import IntroduceBg from '../../../images/introduce_bg.png';
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import RequestForm from '../../RequestForm';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: '60px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    background: `url(${IntroduceBg}) no-repeat top center`,
    backgroundSize: '100%',
  },
  title: {
    fontFamily: 'SVN Aguda',
    fontSize: '53px',
    textAlign: 'center',

    [theme.breakpoints.down('sm')]: {
      fontSize: '36px',
    },
  },
  paragraph: {
    fontSize: '24px',
    lineHeight: '50px',
    margin: '0',
    textAlign: 'center',
    width: '700px',
    textShadow: '0 3px 6px rgba(0, 0, 0, 0.3)',

    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  contact: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  contact__box: {
    background: '#fff',
    width: '100%',
    height: '302px',
  },
  contact__request: {
    fontFamily: 'SVN Aguda',
    fontSize: '36px',
    fontWeight: 'bold',
    marginTop: '50px',
  },
  resize: {
    fontSize: '26px'
  },
  textField: {
    fontSize: '26px'
  },
  left: {

  }
}));


const LandingIntroduce = () => {
  const intl = useIntl();
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    query {
      appDesignImage: file(relativePath: { eq: "undraw_fill_forms_yltj.png" }) {
        childImageSharp {
          fixed(height: 470, quality: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div className={classes.root}>
      <h2 className={classes.title}>PKH Technologies</h2>
      <p className={classes.paragraph}>
        The company operates in the field of electronic circuit design, embedded system programming, software development for automatic control systems on PLC equipment in industry, developing SCADA systems.
      </p>
      <Container maxWidth="lg" className={classes.contact}>
        <div className={classes.contact__img}>
          <Img 
              fixed={data.appDesignImage.childImageSharp.fixed}
              imgStyle={{ objectFit: 'contain' }}
            />
        </div>
        <RequestForm title={intl.formatMessage({ id: "request_form_title" })} />
      </Container>
    </div>
  )
}

export default LandingIntroduce;
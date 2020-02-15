import React from 'react';
import { HeaderTitleDot } from '../../Typography';
import { useIntl } from "gatsby-plugin-intl";
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { useStaticQuery, graphql } from "gatsby";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  item: {
    background: 'url(http://placekitten.com/600/600)',
    height: '600px',
    width: '500px',
    clipPath: 'polygon(0 0, 75% 0, 100% 100%, 25% 100%)',
    display: 'flex',
    position: 'relative',
    textDecoration: 'none',
    color: '#fff',
    transition: 'all .3s ease-in-out',
    overflow: 'hidden',

    [theme.breakpoints.down('sm')]: {
      clipPath: 'inherit',
      width: '100%',
    },

    '&::before': {
      content: "''",
      background: '#222',
      opacity: 0.7,
      position: 'absolute',
      width: '100%',
      height: '100%',
      zIndex: -1,
    },

    '&::after': {
      content: "''",
      background: '#fff',
      position: 'absolute',
      width: '100%',
      height: '32%',
      bottom: 0,
      opacity: 0,
      transition: 'all .3s ease-in-out',
      zIndex: 1,
      transform: 'translateY(200px)',
    },

    '&:hover': {
      color: '#222',

      '&::after': {
        opacity: 1,
        transform: 'translateY(0)',
      }
    }
  },
  item__name: {
    display: 'flex',
    fontSize: '30px',
    position: 'absolute',
    bottom: 0,
    left: '160px',
    paddingRight: '60px',
    textShadow: '0px 8px 26px rgba(0, 0, 0, .3)',
    zIndex: 2,

    [theme.breakpoints.down('sm')]: {
      left: '22px',
      paddingRight: '16px',
    },
  }
}));

const LandingApplication = () => {
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
    <div className={classes.root}>
      <HeaderTitleDot to="/services" title={intl.formatMessage({ id: "application.title" })} showMore />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <a href="/services" className={classes.item}>
            <h3 className={classes.item__name}>PLC programming for automation systems.</h3>
          </a>
        </Grid>
        <Grid item xs={12} sm={4}>
          <a href="/services" className={classes.item}>
            <h3 className={classes.item__name}>Monitoring production systems using IOT.</h3>
          </a>
        </Grid>
        <Grid item xs={12} sm={4}>
          <a href="/services" className={classes.item}>
            <h3 className={classes.item__name}>Motion controller board to control multi-axes systems.</h3>
          </a>
        </Grid>
      </Grid>
    </div>
  )
}

export default LandingApplication;
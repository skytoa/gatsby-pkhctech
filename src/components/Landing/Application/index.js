import React from 'react';
import { HeaderTitleDot } from '../../Typography';
import { makeStyles } from '@material-ui/core';
import { useIntl } from "gatsby-plugin-intl";
import { useStaticQuery, graphql } from "gatsby";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: '60px',
  },
  parallelogram: {
    marginBottom: '30px',
    transition: 'filter .3s ease-in-out',

    '&:hover': {
      filter: 'drop-shadow(-12px 12px 12px rgba(0,0,0,.2))',
    }
  },
  item: {
    background: 'url(http://placekitten.com/600/600) no-repeat',
    backgroundSize: '100% 100%',
    clipPath: 'polygon(0 0, 75% 0, 100% 100%, 25% 100%)',
    color: '#fff',
    display: 'flex',
    height: '500px',
    overflow: 'hidden',
    position: 'relative',
    textDecoration: 'none',
    transition: 'all .3s ease-in-out',
    width: '500px',

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
    bottom: 0,
    display: 'flex',
    fontSize: '26px',
    left: '140px',
    minHeight: '111px',
    paddingRight: '60px',
    position: 'absolute',
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
      <Grid container>
        <Grid item xs={12} sm={12} md={4}>
          <div className={classes.parallelogram}>
            <a href="/services" className={classes.item}>
              <h3 className={classes.item__name}>PLC programming for automation systems.</h3>
            </a>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <div className={classes.parallelogram}>
            <a href="/services" className={classes.item}>
              <h3 className={classes.item__name}>Monitoring production systems using IOT.</h3>
            </a>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <div className={classes.parallelogram}>
            <a href="/services" className={classes.item}>
              <h3 className={classes.item__name}>Motion controller board to control multi-axes systems.</h3>
            </a>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default LandingApplication;

import React from "react"
// import PropTypes from "prop-types"
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import { APP_THEME } from '../types/theme';

import {
  FooterAddress,
  FooterCopyright,
  FooterLogoImage,
  FooterNavbar
} from '../components/Footer/';
import FollowUs from '../components/FollowUs';

const useStyles = makeStyles(theme => ({
  footer: {
    background: theme.palette.background.default,
    borderTop: `10px solid ${theme.palette.type === APP_THEME.LIGHT ? '#F2F2F4' : `${theme.palette.background.secondary}`}`,
    borderBottom: `10px solid ${theme.palette.type === APP_THEME.LIGHT ? '#F2F2F4' : `${theme.palette.background.secondary}`}`,
    padding: '10px',
    overflow: 'hidden',
  },
  right: {
    background: theme.palette.type === APP_THEME.LIGHT ? '#F2F2F4' : `${theme.palette.background.secondary}`,
    position: 'relative',
    justifyContent: 'flex-end',

    [theme.breakpoints.between('xs', 'sm')]: {
      justifyContent: 'space-around',
      height: '230px',
      paddingTop: '24px !important',
    },

    [theme.breakpoints.only('md')]: {
      justifyContent: 'space-between',
    },

    '&::before': {
      content: '""',
      top: 0,
      left: '-100px',
      height: 0,
      width: 0,
      position: "absolute",
      borderBottom: `320px solid ${theme.palette.type === APP_THEME.LIGHT ? '#F2F2F4' : `${theme.palette.background.secondary}`}`,
      borderLeft: '100px solid transparent',

      [theme.breakpoints.down('md')]: {
        borderLeftColor: theme.palette.type === APP_THEME.LIGHT ? '#F2F2F4' : theme.palette.background.secondary,
      },
    },

    '&::after': {
      content: '""',
      top: 0,
      right: '-100vh',
      height: '100%',
      width: '100vh',
      position: "absolute",
      background: theme.palette.type === APP_THEME.LIGHT ? '#F2F2F4' : `${theme.palette.background.secondary}`,
    },

  },
  footer__logo: {
    width: '270px',

    '&:hover': {
      opacity: 0.8,
    },
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12} lg={9}>
            <FooterNavbar />
            <FooterAddress />
            <FooterCopyright />
          </Grid>
          <Grid container item xs={12} sm={12} md={12} lg={3} className={classes.right}>
            <div className={classes.footer__logo}>
              <FooterLogoImage />
            </div>
            <FollowUs />
          </Grid>
        </Grid>
      </Container>
    </footer>
  )
}

// Footer.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Footer.defaultProps = {
//   siteTitle: ``,
// }

export default Footer;

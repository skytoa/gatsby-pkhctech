import React from "react"
// import PropTypes from "prop-types"
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import FooterAddress from '../components/Footer/FooterAddress';
import FooterCopyright from "../components/Footer/FooterCopyright";
import FooterLogoImage from '../components/Footer/FooterLogoImage';
import FooterNavbar from '../components/Footer/FooterNavbar';
import FollowUs from '../components/FollowUs';

const useStyles = makeStyles(theme => ({
  footer: {
    background: '#fff',
    borderTop: '10px solid #F2F2F4',
    borderBottom: '10px solid #F2F2F4',
    borderRight: '10px solid #F2F2F4',
    padding: '10px',
    overflow: 'hidden',
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  right: {
    background: '#F2F2F4',
    position: 'relative',

    '&::before': {
      content: '""',
      top: 0,
      left: '-50px',
      height: 0,
      width: 0,
      position: "absolute",
      borderBottom: '320px solid #F2F2F4',
      borderLeft: '50px solid transparent',
    },

    '&::after': {
      content: '""',
      top: 0,
      right: '-100%',
      height: '100%',
      width: '100%',
      position: "absolute",
      background: '#f2f2f4',
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
          <Grid container item xs={12} sm={12} md={12} lg={3} className={classes.right} justify="flex-end">
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

export default Footer

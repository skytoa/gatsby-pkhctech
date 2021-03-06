import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import ChangeLanguage from '../../components/ChangeLanguage';
import ChangeDarkMode from '../../components/ChangeDarkMode';
import Container from '@material-ui/core/Container';
import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
import LogoColor from '../../images/logo_color.png';
import { AniLink } from '../../components/TransitionLink';
import Navbar from './Navbar';
import { HamburgerMenu } from "../HamburgerMenu";
import { CSSTransition } from 'react-transition-group';
import PropTypes from "prop-types";
import './navbar.css';

const useStyles = makeStyles(theme => ({
  root: {
    height: '70px',
    paddingTop: '3px',
  },
  titlebar: {
    flexGrow: 1,
    padding: '0',
  },
  right: {
    marginLeft: 'auto',
    display: 'flex',
  },
  logo: {
    height: '50px',
    marginTop: '6px',

    '&:hover': {
      opacity: .8,
    }
  },
  titleSite: {
    lineHeight: 0,
    margin: 0
  }
}));

export default ({ toggleTheme, theme }) => {
  const classes = useStyles();

  const [isNavVisible, setNavVisibility] = useState(false);

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <AppBar position="fixed" color="primary" className={classes.root}>
      <Container maxWidth="lg">
        <Toolbar className={classes.titlebar}>
          <AniLink to="/">
            <img src={LogoColor} alt="Logo" className={classes.logo} />
          </AniLink>
          <CSSTransition
            in={isNavVisible}
            timeout={350}
            classNames="NavAnimation"
          >
            <Navbar visible={isNavVisible} />
          </CSSTransition>
          <div className={classes.right}>
            <ChangeLanguage />
            <ChangeDarkMode theme={theme} toggle={toggleTheme} />
            {/* <Switch onChange={handleChange}/> */}
            <HamburgerMenu toggle={toggleNav} visible={isNavVisible} />
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

AppBar.propTypes = {
  toggleTheme: PropTypes.string,
  theme: PropTypes.string,
}

import React from "react";
import { makeStyles, Switch } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import ChangeLanguage from '../components/ChangeLanguage';
import Container from '@material-ui/core/Container';
import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
import LogoColor from '../images/logo_color.png';
import { AniLink } from '../components/TransitionLink';

const useStyles = makeStyles(theme => ({
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
  }
}));

export default ({onThemeTypeSwitch}) => {
  const classes = useStyles();
  const [themeType, setThemeType] = React.useState(false);

  const handleChange = e => {
    setThemeType(!themeType);
    onThemeTypeSwitch();
  };

  return (
    <AppBar position="fixed" color="primary">
      <Container maxWidth="lg">
        <Toolbar className={classes.titlebar}>
          <AniLink to="/">
            <img src={LogoColor} alt="Logo" className={classes.logo} />
          </AniLink>
          <div className={classes.right}>
            <ChangeLanguage />
            <Switch onChange={handleChange}/>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

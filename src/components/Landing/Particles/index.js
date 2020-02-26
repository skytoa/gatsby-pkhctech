import React from 'react';
import Particles from 'react-particles-js';
import { 
  makeStyles,
  Container,
  useTheme,
  useMediaQuery,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.background.secondary,
    position: 'relative',
    height: '100vh',
    width: '100%',
  },
  container: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    padding: '70px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  particles: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    content: "''",
    top: 0,
    zIndex: 0,
  },
  slogan: {
    fontFamily: 'SVN Aguda',
    color: '#fff',
    fontSize: '1.6em',
    textShadow: '7px 2px 5px rgba(0, 0, 0, 0.3)',
    letterSpacing: '3px',

    [theme.breakpoints.up('sm')]: {
      fontSize: '2em',
      letterSpacing: '5px',
    },

    [theme.breakpoints.up('md')]: {
      fontSize: '4em',
      letterSpacing: '10px',
    },
  }
}));

const LandingParticles = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  const particlesParams = {
    "particles": {
      "number": {
        "value": matches ? '60' : '20'
      },
      "size": {
        "value": 3
      }
    },
    "interactivity": {
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        }
      }
    }
  }

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <div className={classes.container}>
          <h2 className={classes.slogan}>We Make It Simple</h2>
        </div>
      </Container>
      <Particles
        className={classes.particles}
        params={particlesParams} />
    </div>
  )
}

export default LandingParticles;

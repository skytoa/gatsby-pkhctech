import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { makeStyles } from '@material-ui/core';
import { NAVIGATION } from '../../types/navigation';
import { AniLink } from '../TransitionLink';
import { APP_THEME } from '../../types/theme';

const useStyles = makeStyles(theme => ({
  link: {
    color: theme.palette.text.primary,
    fontFamily: 'Roboto',
    fontSize: '18px',
    marginRight: '30px',
    textDecoration: 'none',
    textTransform: 'uppercase',
    transition: 'all .3s',
    position: 'relative',

    '&:hover': {
      color: '#009FD4',
    }
  },
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    listStyle: 'none',
  },
  active: {
    color: '#009FD4',
    fontWeight: 'bold',
  },
  navActive: {
    height: 'auto',
    width: 'auto',
    flexDirection: 'row !important',
    opacity: '1',
    display: 'flex !important',

    [theme.breakpoints.between('xs', 'md')]: {
      backgroundColor: theme.palette.type === APP_THEME.LIGHT ? '#fff' : `${theme.palette.background.secondary}`,
      flexDirection: 'column !important',
      position: 'absolute',
      top: '48px',
      left: '-16px',
      width: '100vw',
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'scroll',
    },
  },
  navClose: {
    [theme.breakpoints.between('xs', 'md')]: {
      display: 'none',
      backgroundColor: theme.palette.type === APP_THEME.LIGHT ? '#fff' : `${theme.palette.background.secondary}`,
      flexDirection: 'column !important',
      position: 'fixed',
      top: '-110vh',
      left: 0,
      width: '100%',
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
      overflowY: 'hidden',
    }
  },
  liActive: {
    marginBottom: 'auto',

    [theme.breakpoints.between('xs', 'md')]: {
      marginBottom: '30px',

      '& $link': {
        fontSize: '36px',
      }
    }
  },
  liClose: {
    [theme.breakpoints.between('xs', 'md')]: {
      marginBottom: '30px',

      '& $link': {
        fontSize: '36px',
      }
    }
  }
}));

const Navbar = ({ visible }) => {
  const classes = useStyles();

  const renderMenuLinks = data => {
    return data.map(item => {
      return (
        <li key={item.name} className={visible ? classes.liActive : classes.liClose}>
          <AniLink
            className={classes.link}
            to={item.link}
            activeClassName={classes.active}
          >
            <FormattedMessage id={item.name} />
          </AniLink>
        </li>
      )
    })
  }

  return (
    <ul className={`${classes.navbar} ${visible ? classes.navActive : classes.navClose}`} >
      { renderMenuLinks(NAVIGATION) }
    </ul>
  )
}

export default Navbar;

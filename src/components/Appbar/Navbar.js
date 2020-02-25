import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { makeStyles } from '@material-ui/core';
import { NAVIGATION } from '../../types/navigation';
import { AniLink } from '../TransitionLink';

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

    '@media (max-width: 1280px)': {
      backgroundColor: '#fff',
      flexDirection: 'column !important',
      position: 'fixed',
      top: '48px',
      left: 0,
      width: '100%',
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
      overflowY: 'hidden',
    }
  },
  navClose: {
    

    '@media (max-width: 1280px)': {
      display: 'none',
      backgroundColor: '#fff',
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

    '@media (max-width: 1280px)': {
      marginBottom: '30px',

      '& $link': {
        fontSize: '36px',
      }
    }
  },
  liClose: {
    '@media (max-width: 1280px)': {
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

import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { makeStyles } from '@material-ui/core/styles';
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

    [theme.breakpoints.down('md')]: {
      marginRight: '10px',
    },

    '&:hover': {
      color: '#009FD4',
    }
  },
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    listStyle: 'none',

    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },

    [theme.breakpoints.down('md')]: {
      padding: '0 0 0 10px',
    },
  },
  active: {
    color: '#009FD4',
    fontWeight: 'bold',
  }
}));

const Navbar = ({ ...rest }) => {
  const classes = useStyles();

  const renderMenuLinks = data => {
    return data.map(item => {
      return (
        <li key={item.name}>
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
    <ul {...rest} className={classes.navbar} >
      { renderMenuLinks(NAVIGATION) }
    </ul>
  )
}

export default Navbar;

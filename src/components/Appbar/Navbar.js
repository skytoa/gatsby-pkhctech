import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { makeStyles } from '@material-ui/core/styles';
import { NAVIGATION } from '../../types/navigation';
import { AniLink } from '../TransitionLink';

const useStyles = makeStyles(theme => ({
  root: {
    overflow: 'hidden',
    height: '33px',
  },
  link: {
    color: theme.palette.text.primary,
    fontFamily: 'Roboto',
    fontSize: '18px',
    marginRight: '30px',
    textDecoration: 'none',
    textTransform: 'uppercase',
    marginBottom: '5px',
    transition: 'all .3s',
    position: 'relative',

    '&::after': {
      content: "''",
      position: 'absolute',
      bottom: '-10px',
      left: 0,
      background: `${theme.palette.text.primary}`,
      height: '3px',
      width: '100%',
      opacity: 1,
      transform: 'translateX(-100px)',
      transition: 'all .3s ease-in-out',
    },

    '&:hover': {
      '&::after': {
        transform: 'translateX(0)',
      }
    }
  },
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    listStyle: 'none',

    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  active: {
    color: theme.palette.text.primary,
    
    '&::after': {
      opacity: 1,
      transform: 'translateX(0)',
    }
  }
}));

const Navbar = ({ ...rest }) => {
  const classes = useStyles();

  const renderMenuLinks = data => {
    return data.map(item => {
      return (
        <li key={item.name} className={classes.root}>
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

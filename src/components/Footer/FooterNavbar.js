import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { makeStyles } from '@material-ui/core/styles';
import { NAVIGATION } from '../../types/navigation';
import { AniLink } from '../TransitionLink';

const useStyles = makeStyles(theme => ({
  link: {
    color: theme.palette.text.secondary,
    fontFamily: 'Roboto',
    fontSize: '18px',
    marginRight: '20px',
    textDecoration: 'none',
    textTransform: 'uppercase',
    marginBottom: '5px',
    borderBottom: '3px solid transparent',
    transition: 'all .3s',

    '&:hover': {
      borderBottom: `3px solid ${theme.palette.text.primary}`,
    }
  },
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    listStyle: 'none',
    padding: 0,
    marginTop: '26px',
    marginBottom: '36px',

    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  active: {
    color: theme.palette.text.primary,
    borderBottom: `3px solid ${theme.palette.text.primary}`
  }
}));

const FooterNavbar = ({ ...rest }) => {
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

export default FooterNavbar;

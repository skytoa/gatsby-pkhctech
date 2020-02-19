import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { makeStyles } from '@material-ui/core/styles';
import { NAVIGATION } from '../../modules/constants';
import { AniLink } from '../TransitionLink';

const useStyles = makeStyles(theme => ({
  link: {
    color: theme.palette.text.secondary,
    fontFamily: 'Roboto',
    fontSize: '18px',
    marginRight: '20px',
    textDecoration: 'none',
    textTransform: 'uppercase'
  },
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    listStyle: 'none',
    padding: 0,
    marginTop: '26px',
    marginBottom: '36px'
  },
  active: {
    color: theme.palette.text.primary
  }
}));

const FooterNavbar = () => {
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
    <>
      <ul className={classes.navbar} >
        { renderMenuLinks(NAVIGATION) }
      </ul>
    </>
  )
}

export default FooterNavbar;

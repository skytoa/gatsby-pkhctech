import React from 'react';
import { Link, FormattedMessage } from 'gatsby-plugin-intl';
import { makeStyles } from '@material-ui/core/styles';
import { NAVIGATION } from '../../modules/constants';

const useStyles = makeStyles(theme => ({
  link: {
    color: '#222',
    fontFamily: 'Roboto',
    fontSize: '22px',
    marginRight: '15px',
    textDecoration: 'none'
  },
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    listStyle: 'none',
    padding: 0,
  }
}));

const FooterNavbar = () => {
  const classes = useStyles();

  const renderMenuLinks = data => {
    return data.map(item => {
      return (
        <li>
          <Link
            className={classes.link}
            key={item.name}
            to={item.link}
          >
            <FormattedMessage id={item.name} />
          </Link>
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
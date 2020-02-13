import React from 'react';
import { Link, FormattedMessage } from 'gatsby-plugin-intl';
import { makeStyles } from '@material-ui/core/styles';
import { NAVIGATION } from '../../modules/constants';

const useStyles = makeStyles(theme => ({
  link: {
    color: '#222',
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
  }
}));

const FooterNavbar = () => {
  const classes = useStyles();

  const renderMenuLinks = data => {
    return data.map(item => {
      return (
        <li key={item.name}>
          <Link
            className={classes.link}
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
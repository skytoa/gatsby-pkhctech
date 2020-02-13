import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby-plugin-intl';

const useStyles = makeStyles(theme => ({
  header: {
    fontFamily: 'SVN Aguda',
    display: 'flex',
    alignItems: 'baseline',

    '& a': {
      textDecoration: 'none',
      color: '#222',
    }
  },
  title: {
    fontSize: '53px',
    
    '& span': {
      color: '#2AA7DE',
    }
  },
  view_more: {
    fontSize: '20px',
    marginLeft: 'auto',
  }
}));
const HeaderTitle = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.header}>
      <h2 className={classes.title}>
        <Link to="/">Our <span>Services</span></Link>
      </h2>
      <div className={classes.view_more}>
        <Link to="/">View More</Link>
      </div>
    </div>
  )
}

export default HeaderTitle;
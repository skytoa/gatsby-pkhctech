import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AniLink } from '../../components/TransitionLink';

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
    

    [theme.breakpoints.down('sm')]: {
      fontSize: '36px',
    },

    '&:hover': {
      '& span': {
        color: '#5E39BC',
      }
    },
    
    '& span': {
      transition: 'all .3s ease-in-out',
      color: '#2AA7DE',
    }
  },
  view_more: {
    fontSize: '20px',
    marginLeft: 'auto',

    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
    },
  }
}));
const HeaderTitle = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.header}>
      <h2 className={classes.title}>
        <AniLink to="/services">
          Our <span>Services</span>
        </AniLink>
      </h2>
      <div className={classes.view_more}>
        <AniLink to="/services">
          View More
        </AniLink>
      </div>
    </div>
  )
}

export default HeaderTitle;
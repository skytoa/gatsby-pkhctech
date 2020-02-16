import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: '60px',
  },
  parallelogram: {
    marginBottom: '30px',
    transition: 'filter .3s ease-in-out',

    '&:hover': {
      filter: 'drop-shadow(-12px 12px 12px rgba(0,0,0,.2))',
    }
  },
  item: {
    backgroundImage: props => `url(${props.image})`,
    backgroundSize: '100% 100%',
    clipPath: 'polygon(0 0, 75% 0, 100% 100%, 25% 100%)',
    color: '#fff',
    display: 'flex',
    height: '500px',
    overflow: 'hidden',
    position: 'relative',
    textDecoration: 'none',
    transition: 'all .3s ease-in-out',
    width: '500px',

    [theme.breakpoints.down('sm')]: {
      clipPath: 'inherit',
      width: '100%',
    },

    '&::before': {
      background: '#222',
      content: "''",
      height: '100%',
      opacity: 0.7,
      position: 'absolute',
      width: '100%',
      zIndex: 0,
    },

    '&::after': {
      background: '#fff',
      bottom: 0,
      content: "''",
      height: '32%',
      opacity: 0,
      position: 'absolute',
      transform: 'translateY(200px)',
      transition: 'all .3s ease-in-out',
      width: '100%',
      zIndex: 1,
    },

    '&:hover': {
      color: '#222',

      '&::after': {
        opacity: 1,
        transform: 'translateY(0)',
      }
    }
  },
  item__name: {
    bottom: 0,
    display: 'flex',
    fontSize: '26px',
    left: '140px',
    minHeight: '111px',
    paddingRight: '60px',
    position: 'absolute',
    textShadow: '0px 8px 26px rgba(0, 0, 0, .3)',
    zIndex: 2,

    [theme.breakpoints.down('sm')]: {
      left: '22px',
      paddingRight: '16px',
    },
  }
}));

const ApplicationItem = ({ to, title, image }) => {
  const classes = useStyles({ image });

  return (
    <Grid item xs={12} sm={12} md={4}>
      <div className={classes.parallelogram}>
        <a href={to} className={classes.item}>
          <h3 className={classes.item__name}>{title}</h3>
        </a>
      </div>
    </Grid>
  )
}

export default ApplicationItem;

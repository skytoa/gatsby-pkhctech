import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import Img from "gatsby-image";
import { APP_THEME } from '../../../types/theme';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
  },
  link: {
    transition: 'all .3s ease',
    filter: theme.palette.type === APP_THEME.LIGHT ? 'grayscale(0)' : 'grayscale(100%)',

    '&:hover': {
      opacity: theme.palette.type === APP_THEME.LIGHT ? '0.8' : '1',
      filter: 'none',
    },
  }
}));

const ClientsItem = ({ to, name, image }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4} className={classes.root}>
      <a
        aria-label={name}
        className={classes.link}
        href={to}
        rel="noopener noreferrer"
        target="_blank"
      >
        <Img 
          fixed={image}
          imgStyle={{ objectFit: 'contain' }}
          alt={ name }
        />
      </a>
    </Grid>
  )
}

export default ClientsItem;

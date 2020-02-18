import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import Img from "gatsby-image";

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
  },
  link: {
    transition: 'opacity .3s ease',
    '&:hover': {
      opacity: 0.8,
    }
  }
}));

const ClientsItem = ({ to, name, image }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={12} md={4} className={classes.root}>
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

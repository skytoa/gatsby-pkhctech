import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import Img from "gatsby-image";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  }
}));

const ClientsItem = ({ to, name, image }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={12} md={4}>
      <Img 
        fixed={image}
        imgStyle={{ objectFit: 'contain' }}
        alt={ name }
      />
    </Grid>
  )
}

export default ClientsItem;

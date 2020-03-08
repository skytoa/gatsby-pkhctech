import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Img from "gatsby-image";

const clipPathRight = 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)';
const clipPathLeft = 'polygon(0 0, 75% 0, 100% 100%, 25% 100%)';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: '60px',
    marginTop: '160px',
  },
  item: {
    marginBottom: '30px',
    transition: 'all .3s ease-in-out',
    clipPath: props => props.type === 'left' ? clipPathLeft : clipPathRight,

    '&:hover': {
      opacity: 0.8,
      filter: 'drop-shadow(-12px 12px 12px rgba(0,0,0,.2))',
    }
  },
  img: {
    width: '100%',
  }
}));

const ParallelogramImg = ({type, image}) => {
  const classes = useStyles({ type });

  return (
    <Grid item xs={12} sm={12} md={5} className={classes.root}>
      <div className={classes.item}>
      <Img fluid={image} key="12" className={classes.img} />
      </div>
    </Grid>
  )
}

export default ParallelogramImg;

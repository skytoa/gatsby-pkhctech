import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { HeaderTitleCountBorderBottom } from '../Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: '60px',
    marginTop: '160px',
  },
  content: {
    fontSize: '1.6em',
    lineHeight: 2,
    paddingLeft: '100px'
  }
}));

const ServiceItemContent = ({title, content}) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={12} md={7} className={classes.root}>
      <div>
        <HeaderTitleCountBorderBottom title={title} />
        <p className={classes.content} dangerouslySetInnerHTML={{ __html: content }}></p>
      </div>
    </Grid>
  )
}

export default ServiceItemContent;

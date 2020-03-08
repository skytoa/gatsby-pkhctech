import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
  },
  title: {
    marginBottom: '60px',
    marginTop: '100px',
    fontSize: theme.typography.h3.fontSize,
    paddingLeft: '97px',
    fontFamily: 'SVN Aguda',

    '&::before': {
      counterIncrement: 'service-counter',
      content: "counter(service-counter, decimal-leading-zero)",
      fontSize: theme.typography.h2.fontSize,
      position: 'absolute',
      left: 0,
    },
  },
}));

const HeaderTitleCountBorderBottom = ({ title }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h3 className={classes.title}>
        {title}
      </h3>
    </div>
  )
}

export default HeaderTitleCountBorderBottom;

import React from 'react';
import { makeStyles, Container } from '@material-ui/core';
import RequestContent from './RequestContent';
import RequestImage from './RequestImage';

const useStyles = makeStyles(theme => ({
  root: {
    alignItems: 'flex-end',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
  },
}));

const Request = ({ title }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.root}>
      <RequestImage />
      <RequestContent title={title} />
    </Container>
  )
}

export default Request;

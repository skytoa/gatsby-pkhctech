import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  text: {
    fontFamily: 'SVN Aguda',
    fontSize: '53px',
    color: '#222',
  },
  span: {
    color: '#2AA7DE'
  }
}));
const HeaderTitle = () => {
  const classes = useStyles();

  return (
    <>
      <h2 class={classes.text}>Our <span class={classes.span}>Services</span></h2>
    </>
  )
}

export default HeaderTitle;
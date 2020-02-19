import React from 'react';
import { AniLink } from '../TransitionLink';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  link: {
    color: theme.palette.text.secondary,
    textDecoration: 'none',
  },
}));

const FooterCopyright = () => {
  const classes = useStyles();
  const getFullYear = new Date().getFullYear();

  return (
    <Typography variant="body2" color="textSecondary" style={{ margin: '36px 0'}}>
      {`Copyright © ${getFullYear} `}
      <AniLink
        to="/"
        className={classes.link}
      >
        PKH Technologies
      </AniLink>
      {'. All rights reserved.'}
    </Typography>
  )
}

export default FooterCopyright;

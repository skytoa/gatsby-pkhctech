import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { FormattedMessage } from "gatsby-plugin-intl";
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  social: {
    display: 'flex',
    listStyle: 'none',
    alignItems: 'center',
  },
  social__icon: {
    display: 'flex',
    alignItems: 'center',

    '& a': {
      color: '#222',
      marginRight: '10px',

      '&:hover': {
        color: '#2AA7DE',
      },
    }
  },
  text: {
    fontSize: '16px',
    position: 'relative',
    width: '150px',
    display: 'flex',
    justifyContent: 'flex-end',

    '&::before': {
      content: '""',
      top: '8px',
      left: '10px',
      background: '#222',
      height: '3px',
      width: '50px',
      position: "absolute",
    },
  }
}));

const FollowUs = () => {
  const classes = useStyles();

  return (
    <div className={classes.social}>
      <div className={classes.social__icon}>
        <Link href="https://fb.com" target="_blank" rel="noreferrer"><FacebookIcon style={{ fontSize: 30 }} /></Link>
        <Link href="https://youtube.com" target="_blank" rel="noreferrer"><YouTubeIcon style={{ fontSize: 38 }} /></Link>
      </div>
      <div className={classes.text}><FormattedMessage id="follow_us" /></div>
    </div>
  )
}

export default FollowUs;
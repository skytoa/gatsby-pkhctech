import React from 'react';
import { useIntl } from "gatsby-plugin-intl";
import { makeStyles } from '@material-ui/core';
import IntroduceBg from '../../../images/introduce_bg.png';
import Request from '../../Request';

const useStyles = makeStyles(theme => ({
  root: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    position: 'relative',
    
    '&::before': {
      background: `url(${IntroduceBg}) no-repeat top center`,
      backgroundSize: '100%',
      content: "''",
      height: '100%',
      opacity: 0.4,
      position: 'absolute',
      top: 0,
      width: '100%',
      zIndex: -1,
    }
  },
  title: {
    fontFamily: 'SVN Aguda',
    fontSize: '53px',
    textAlign: 'center',

    [theme.breakpoints.down('sm')]: {
      fontSize: '36px',
    },
  },
  paragraph: {
    fontSize: '24px',
    lineHeight: '50px',
    margin: '0',
    textAlign: 'center',
    textShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
    width: '700px',
    padding: theme.spacing(2),

    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  contact: {
    alignItems: 'flex-end',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
  },
}));

const LandingIntroduce = () => {
  const intl = useIntl();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2 className={classes.title}>{intl.formatMessage({ id: "title" })}</h2>
      <p className={classes.paragraph}>
        {intl.formatMessage({ id: "description" })}
      </p>
      <Request title={intl.formatMessage({ id: "request_title" })} />
    </div>
  )
}

export default LandingIntroduce;

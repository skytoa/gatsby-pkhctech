import React from 'react';
import { makeStyles } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { FormattedMessage } from "gatsby-plugin-intl";
import { AniLink } from '../TransitionLink';
import { APP_THEME } from '../../types/theme'

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.type === APP_THEME.LIGHT ? '#fff' : `${theme.palette.background.secondary}`,
    width: '100%',
    height: '297px',
    display: 'flex',
    padding: '16px 10px 0',
    margin: '0 0 6px -2px',
    boxShadow: '90px 0 79px rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',

    [theme.breakpoints.down('sm')]: {
      marginTop: '66px',
      height: 'auto',
      padding: '25px',
      flexDirection: 'column',
      boxShadow: '0 0 40px rgba(0, 0, 0, 0.1)',
    },

    '&::before': {
      content: "''",
      position: 'absolute',
      background: 'linear-gradient(200deg, #663399, #2AA7DE)',
      width: '90%',
      height: '200px',
      top: '140px',
      right: '0',
      zIndex: -1,

      [theme.breakpoints.down('sm')]: {
        top: '26px',
        width: '100%',
      },
    }
  },
  button: {
    background: theme.palette.background.default,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    transition: 'all .3s ease',
    padding: '0 32px',
    border: `1px solid ${theme.palette.text.primary}`,
    color: theme.palette.text.primary,
    marginLeft: '-60px',

    [theme.breakpoints.down('sm')]: {
      marginLeft: '0',
    },

    '&:hover': {
      background: 'linear-gradient(200deg, #2AA7DE, #663399)',
      color: '#fff',

      '& svg': {
        transform: 'translateX(16px)',
      }
    }

  },
  button__paragraph: {
    fontSize: '1.3em',
    lineHeight: '1',
    marginRight: theme.spacing(1),
    
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2em',
    },
  },
  title: {
    fontFamily: 'SVN Aguda',
    fontSize: '36px',
    fontWeight: 'bold',
    lineHeight: '60px',
    margin: '0 0 30px -60px',
    textAlign: 'center',

    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2em',
      lineHeight: '38px',
      marginLeft: 0,
    },
  },
  arrow: {
    transform: 'translateX(0)',
    transition: 'transform 0.3s ease',
  }
}));


const RequestContent = ({ title }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p
        className={classes.title}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <AniLink to="/contact" className={classes.button}>
        <p className={classes.button__paragraph}>
          <FormattedMessage id="contact_us" />
        </p>
        <ArrowRightAltIcon className={classes.arrow} />
      </AniLink>
    </div>
  )
}

export default RequestContent;

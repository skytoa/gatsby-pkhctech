import React from 'react';
import { makeStyles, TextField } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { FormattedMessage } from "gatsby-plugin-intl";
import { AniLink } from '../TransitionLink';

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.type === "light" ? '#fff' : `${theme.palette.background.secondary}`,
    width: '100%',
    height: '297px',
    display: 'flex',
    padding: '45px 10px 0',
    margin: '0 0 6px -2px',
    boxShadow: '90px 0 79px rgba(0, 0, 0, 0.1)',

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
      height: '220px',
      top: '140px',
      right: '0',
      zIndex: -1,

      [theme.breakpoints.down('sm')]: {
        top: '26px',
        width: '100%',
      },
    }
  },
  left: {
    width: '70%',

    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  button: {
    width: '30%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textDecoration: 'none',
    transition: 'color .3s ease',
    color: theme.palette.text.primary,

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row',
      width: '100%',
    },

    '&:hover': {
      color: theme.palette.background.secondary
    }
  },
  button__paragraph: {
    fontSize: '1.3em',
  },
  title: {
    fontFamily: 'SVN Aguda',
    fontSize: '26px',
    fontWeight: 'bold',
    lineHeight: '50px',
    margin: '0 0 30px',

    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
      lineHeight: '38px',
    },
  },
  resize: {
    fontSize: '26px'
  },
  textField: {
    fontSize: '26px',
    width: '100%',
  },

}));


const RequestForm = ({ title }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <h4
          className={classes.title}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <TextField
          id="request"
          label="name@email.com"
          InputProps={{
            classes: {
              input: classes.resize,
            },
          }}
          color="secondary"
          className={classes.textField}
          margin="normal"
        />
      </div>
      <AniLink to="/contact" className={classes.button}>
        <ArrowRightAltIcon style={{ fontSize: '80px' }} />
        <p className={classes.button__paragraph}>
          <FormattedMessage id="contact_us" />
        </p>
      </AniLink>
    </div>
  )
}

export default RequestForm;

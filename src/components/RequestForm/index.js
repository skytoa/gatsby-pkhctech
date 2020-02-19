import React from 'react';
import { makeStyles, TextField } from '@material-ui/core';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
import { FormattedMessage } from "gatsby-plugin-intl";
import { AniLink } from '../TransitionLink';

const useStyles = makeStyles(theme => ({
  root: {
    background: '#fff',
    width: '100%',
    height: '302px',
    display: 'flex',
    padding: '45px 0 0',
  },
  left: {
    width: '70%',
  },
  right: {
    width: '30%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textDecoration: 'none',
  },
  right__paragraph: {
    fontSize: '1.3em',
  },
  title: {
    fontFamily: 'SVN Aguda',
    fontSize: '26px',
    fontWeight: 'bold',
    lineHeight: '50px',
    margin: '0 0 30px',
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
      <AniLink to="/contact" className={classes.right}>
        <SubdirectoryArrowRightIcon style={{ fontSize: '80px' }} />
        <p className={classes.right__paragraph}>
          <FormattedMessage id="contact_us" />
        </p>
      </AniLink>
    </div>
  )
}

export default RequestForm;
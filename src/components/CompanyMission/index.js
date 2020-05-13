import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormattedMessage } from "gatsby-plugin-intl";
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  root: {
    background: 'linear-gradient(0deg, rgba(94,57,188,1) 0%, rgba(42,167,222,1) 100%)',
    display: 'flex',
    listStyle: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '120px 0',
  },
  mission: {
    color: '#fff',
    fontSize: '36px',
    fontWeight: 'bold',
    fontFamily: 'SVN-Aguda',
    lineHeight: 1.8,
  }
}));

const CompanyMission = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2 className={classes.mission}>MAKE EVERYTHING BE SIMPLE <br />& BRING COMFORT AND SIMPLICITY TO CUSTOMERS</h2>
    </div>
  )
}

export default CompanyMission;

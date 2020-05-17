import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CompanyMissionLogo from '../../images/company_mission_logo.png';

const useStyles = makeStyles(theme => ({
  root: {
    background: 'linear-gradient(0deg, rgba(94,57,188,1) 0%, rgba(42,167,222,1) 100%)',
    display: 'flex',
    listStyle: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '120px 0',
    position: 'relative',
    marginBottom: "60px",

    [theme.breakpoints.down('md')]: {
      padding: '70px 0',
    },

    '&:before': {
      content: "''",
      position: 'absolute',
      bottom: 0,
      left: 0,
      background: `url(${CompanyMissionLogo}) no-repeat bottom left`,
      width: '100%',
      height: '100%',

      [theme.breakpoints.down('md')]: {
        height: '90%',
        width: '43%',
        backgroundSize: 'contain',
        left: '50%',
        transform: 'translate(-50%, 0)',
      },
    }
  },
  mission: {
    color: '#fff',
    fontSize: '36px',
    fontWeight: 'bold',
    fontFamily: 'SVN-Aguda',
    lineHeight: 1.8,

    [theme.breakpoints.down('md')]: {
      fontSize: '1em',
    },
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

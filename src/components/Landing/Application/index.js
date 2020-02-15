import React from 'react';
import { HeaderTitle } from '../../Typography';
import { useIntl } from "gatsby-plugin-intl";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

const LandingApplication = () => {
  const intl = useIntl();
  const classes = useStyles();

  return (
    <HeaderTitle to="/services" title={intl.formatMessage({ id: "application.title" })} showMore />
  )
}

export default LandingApplication;
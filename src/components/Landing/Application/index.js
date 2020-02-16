import React from 'react';
import { HeaderTitleDot } from '../../Typography';
import { makeStyles } from '@material-ui/core';
import { useIntl } from "gatsby-plugin-intl";
import { useStaticQuery, graphql } from "gatsby";
import Grid from '@material-ui/core/Grid';
import ApplicationItem from './ApplicationItem';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: '60px',
  },
}));

const LandingApplication = () => {
  const intl = useIntl();
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    query {
      factoryImage: file(relativePath: { eq: "services/factory.png" }) {
        childImageSharp {
          fixed(width: 416) {
            src
          }
        }
      },
      appDesignImage: file(relativePath: { eq: "services/undraw_progressive_app_m9ms.png" }) {
        childImageSharp {
          fixed(width: 416) {
            src
          }
        }
      }
    }
  `)

  return (
    <div className={classes.root}>
      <HeaderTitleDot to="/services" title={intl.formatMessage({ id: "application.title" })} showMore />
      <Grid container>
        <ApplicationItem to="/services" title="PLC programming for automation systems." image={data.factoryImage.childImageSharp.fixed.src} />
        <ApplicationItem to="/services" title="Monitoring production systems using IOT." image={data.factoryImage.childImageSharp.fixed.src} />
        <ApplicationItem to="/services" title="Motion controller board to control multi-axes systems." image={data.appDesignImage.childImageSharp.fixed.src} />
      </Grid>
    </div>
  )
}

export default LandingApplication;

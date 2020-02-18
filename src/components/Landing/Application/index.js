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
      imgOne: file(relativePath: { eq: "application/img1.jpg" }) {
        childImageSharp {
          fixed(width: 500) {
            src
          }
        }
      },
      imgTwo: file(relativePath: { eq: "application/img2.jpg" }) {
        childImageSharp {
          fixed(width: 500) {
            src
          }
        }
      },
      imgThree: file(relativePath: { eq: "application/img3.jpg" }) {
        childImageSharp {
          fixed(width: 500) {
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
        <ApplicationItem to="/services" title={intl.formatMessage({ id: "application.desc_one" })} image={data.imgOne.childImageSharp.fixed.src} />
        <ApplicationItem to="/services" title={intl.formatMessage({ id: "application.desc_two" })} image={data.imgTwo.childImageSharp.fixed.src} />
        <ApplicationItem to="/services" title={intl.formatMessage({ id: "application.desc_three" })} image={data.imgThree.childImageSharp.fixed.src} />
      </Grid>
    </div>
  )
}

export default LandingApplication;

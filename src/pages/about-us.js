import React from "react"
import { useIntl } from "gatsby-plugin-intl";
import {
  Container,
  Grid,
  makeStyles,
} from '@material-ui/core';
import Layout from "../layouts"
import SEO from "../layouts/seo";
// import { 
//   LandingParticles,
// } from '../components/Landing';
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: '160px',
    marginBottom: '60px',
    // counterReset: 'service-counter',
  },
  introduction: {
    fontFamily: 'SVN Aguda',
    fontSize: '53px',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  introductionLogo: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: '70px'
  },
  introductionContent: {
    fontFamily: 'Roboto',
    fontSize: '18px',
    lineHeight: '38px',
  }
}));


const AboutUsPage = () => {
  const intl = useIntl();
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    query {
      imgLogoWithSlogan: file(relativePath: { eq: "logo_slogan.png" }) {
        childImageSharp {
          fixed(width: 398, height: 555) {
            ...GatsbyImageSharpFixed
          }
        }
      },
      imgTwo: file(relativePath: { eq: "services/programming.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 388, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      imgThree: file(relativePath: { eq: "services/scada_system.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 388, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      imgFour: file(relativePath: { eq: "services/software_design.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 388, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      },
    }
  `)

  return (
    <Layout>
      <SEO
        title={intl.formatMessage({ id: "navigation.about_us" })}
      />
      <Container maxWidth="lg" className={classes.root}>
        <h2 className={classes.introduction}>{intl.formatMessage({ id: "introduction" })}</h2>
        <Grid container alignItems="stretch">
          <Grid item xs={12} sm={12} md={6}>
            <div className={classes.introductionLogo}>
              <Img fixed={data.imgLogoWithSlogan.childImageSharp.fixed} />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <p className={classes.introductionContent} dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: "page_about_us.introduction" }) }} />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}
export default AboutUsPage


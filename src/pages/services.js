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
import { ParallelogramImg } from '../components/Parallelogram';
import { ServiceItemContent } from '../components/Services';
import { useStaticQuery, graphql } from "gatsby";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: '60px',
    // counterReset: 'service-counter',
  },
}));


const ServicesPage = () => {
  const intl = useIntl();
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    query {
      imgOne: file(relativePath: { eq: "services/circuit-board.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 474, quality: 90) {
            ...GatsbyImageSharpFluid
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
      imgThree: file(relativePath: { eq: "application/img3.jpg" }) {
        childImageSharp {
          fixed(width: 500) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO
        title={intl.formatMessage({ id: "navigation.services" })}
      />
      <Container maxWidth="lg" className={classes.root}>
        <Grid container>
          <ParallelogramImg key="1" type="left" image={data.imgOne.childImageSharp.fluid} />
          <ServiceItemContent
            title={intl.formatMessage({ id: "hardware_circuit_design" })}
            content={intl.formatMessage({ id: "hardware_circuit_design_desc" })} />
        </Grid>
        <Grid container>
          <ParallelogramImg key="2" type="right" image={data.imgTwo.childImageSharp.fluid} />
          <ServiceItemContent
            title={intl.formatMessage({ id: "embedded_system_programming" })}
            content={intl.formatMessage({ id: "embedded_system_programming_desc" })} />
        </Grid>
      </Container>
    </Layout>
  )
}
export default ServicesPage


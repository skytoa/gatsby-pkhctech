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
    counterReset: 'service-counter',
  },
}));


const ServicesPage = () => {
  const intl = useIntl();
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    query {
      imgOne: file(relativePath: { eq: "services/circuit-board.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 674, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      imgTwo: file(relativePath: { eq: "application/img2.jpg" }) {
        childImageSharp {
          fixed(width: 500) {
            ...GatsbyImageSharpFixed
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
          <ServiceItemContent title="Hardware Circuit Design" />
        </Grid>
      </Container>
    </Layout>
  )
}
export default ServicesPage


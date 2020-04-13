import React from "react";
import Layout from "../layouts";
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby";
import { 
  LandingApplication,
  LandingClients,
  LandingIntroduce,
  LandingOurServices,
  LandingHero,
} from '../components/Landing';

const IndexPage = () => {

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
      </Helmet>
      <LandingHero />
      <LandingOurServices />
      <LandingApplication />
      <LandingClients />
      <LandingIntroduce />
    </Layout>
  )
}
export default IndexPage

import React from "react";
import Layout from "../layouts";
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";
import imgPreview from '../images/preview.png';

import { 
  LandingApplication,
  LandingClients,
  LandingIntroduce,
  LandingOurServices,
  LandingHero,
} from '../components/Landing';

const IndexPage = () => {
  const intl = useIntl();
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  return (
    <Layout>
      <Helmet
        htmlAttributes={{
          lang: intl.locale,
        }}
        title={site.siteMetadata.title}
        meta={[
          {
            name: `description`,
            content: site.siteMetadata.description,
          },
          {
            property: `og:title`,
            content: site.siteMetadata.title,
          },
          {
            property: `og:description`,
            content: site.siteMetadata.description,
          },
          {
            property: `og:image`,
            content: site.siteMetadata.siteUrl + imgPreview,
          },
          {
            property: `og:url`,
            content: site.siteMetadata.siteUrl,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: site.siteMetadata.author,
          },
          {
            name: `twitter:title`,
            content: site.siteMetadata.title,
          },
          {
            name: `twitter:description`,
            content: site.siteMetadata.description,
          },
        ]}
      />
      <LandingHero />
      <LandingOurServices />
      <LandingApplication />
      <LandingClients />
      <LandingIntroduce />
    </Layout>
  )
}
export default IndexPage

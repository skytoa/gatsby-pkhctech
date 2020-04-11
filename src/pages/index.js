import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import Layout from "../layouts";
import SEO from "../layouts/seo";
import { 
  LandingApplication,
  LandingClients,
  LandingIntroduce,
  LandingOurServices,
  LandingHero,
} from '../components/Landing';

const IndexPage = () => {
  const intl = useIntl();

  return (
    <Layout>
      <SEO
        title={intl.formatMessage({ id: "introduce" })}
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

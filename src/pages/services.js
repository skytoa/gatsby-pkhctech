import React from "react"
import { useIntl, Link, FormattedMessage } from "gatsby-plugin-intl";
import { 
  Container,
} from '@material-ui/core';
import Layout from "../layouts"
import SEO from "../layouts/seo";
import { 
  LandingParticles,
} from '../components/Landing';

const ServicesPage = () => {
  const intl = useIntl()
  return (
    <Layout>
      <SEO
        title={intl.formatMessage({ id: "navigation.services" })}
      />
      <LandingParticles />

      <Container maxWid th="lg">
        <h1><FormattedMessage id="hello_page2" /></h1>
        <Link to="/">
          {/* {intl.formatMessage({ id: "go_page2" })} */}
          <FormattedMessage id="go_back" />
        </Link>
      </Container>
    </Layout>
  )
}
export default ServicesPage


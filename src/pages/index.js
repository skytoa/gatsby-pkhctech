import React from "react"
import Layout from "../layouts"
import SEO from "../layouts/seo"
import { useIntl, Link, FormattedMessage } from "gatsby-plugin-intl"

const IndexPage = () => {
  const intl = useIntl()
  return (
    <Layout>
      <SEO
        title={intl.formatMessage({ id: "title" })}
      />
      <h1><FormattedMessage id="welcome" /></h1>
      <Link to="/page-2/">
        {/* {intl.formatMessage({ id: "go_page2" })} */}
        <FormattedMessage id="go_page2" />
      </Link>
    </Layout>
  )
}
export default IndexPage

import React from "react"
import { useIntl, Link, FormattedMessage } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => {
  const intl = useIntl()
  return (
    <Layout>
      <SEO
        title={intl.formatMessage({ id: "title_page2" })}
      />
      <h1><FormattedMessage id="hello_page2" /></h1>
      <Link to="/">
        {/* {intl.formatMessage({ id: "go_page2" })} */}
        <FormattedMessage id="go_back" />
      </Link>
    </Layout>
  )
}
export default SecondPage


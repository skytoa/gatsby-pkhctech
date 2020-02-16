import React from "react";
import Layout from "../layouts";
import SEO from "../layouts/seo";
import { useIntl, Link, FormattedMessage } from "gatsby-plugin-intl";
import { 
  LandingOurServices,
  LandingApplication,
} from '../components/Landing';
import { AniLink } from '../components/TransitionLink';

const IndexPage = () => {
  const intl = useIntl();

  return (
    <Layout>
      <SEO
        title={intl.formatMessage({ id: "introduce" })}
      />
      <LandingOurServices />
      <LandingApplication />
      <LandingOurServices />

      <Link to="/page-2/">
        {/* {intl.formatMessage({ id: "go_page2" })} */}
        <FormattedMessage id="go_page2" /> 
      </Link>

      <AniLink to="/post">
        Test ani 
      </AniLink>

      <AniLink to="/page-2">
        Test ani 
      </AniLink>
    </Layout>
  )
}
export default IndexPage

import React from "react";
import { graphql } from "gatsby";
import Layout from "../layouts";
import SEO from "../layouts/seo";
import { useIntl, Link, FormattedMessage } from "gatsby-plugin-intl";

const PostPage = ({ data }) => {
  const intl = useIntl();

  return (
    <>
      <Layout>
        <SEO
          title={intl.formatMessage({ id: "title" })}
        />
        <h1><FormattedMessage id="welcome" /></h1>
        <div>
          <h1>Pages</h1>
          {data.allWordpressPage.edges.map(({ node }) => (
            <div key={node.slug}>
              <Link to={`/${node.slug}`}>
                <h2>{node.title}</h2>
              </Link>
              <h3>{node.excerpt}</h3>
            </div>
          ))}
        </div>

        <h1>Posts</h1>
        {data.allWordpressPost.edges.map(({ node }) => (
          <div key={node.slug}>
            <Link to={`/${node.path}`}>
              <h2>{node.title}</h2>
            </Link>
            <h3>{node.excerpt}</h3>
          </div>
        ))}
        <Link to="/page-2/">
          {/* {intl.formatMessage({ id: "go_page2" })} */}
          <FormattedMessage id="go_page2" />
        </Link>
      </Layout>
        
      </>
  )
}

export default PostPage;

export const pageQuery = graphql`
  query {
    allWordpressPage {
      edges {
        node {
          id
          title
          excerpt
          slug
          path
        }
      }
    }
    allWordpressPost {
      edges {
        node {
          title
          excerpt
          slug
          path
        }
      }
    }
  }
`
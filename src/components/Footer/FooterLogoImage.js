import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby-plugin-intl";

const FooterLogoImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "footer_logo_color.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Link to="/"><Img fluid={data.placeholderImage.childImageSharp.fluid} /></Link>
}

export default FooterLogoImage;

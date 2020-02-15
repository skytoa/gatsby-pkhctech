import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { AniLink } from '../../components/TransitionLink';

const FooterLogoImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "footer_logo_color.png" }) {
        childImageSharp {
          fluid(maxWidth: 270) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <AniLink to="/" aria-label="Logo">
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    </AniLink>
  )
}

export default FooterLogoImage;

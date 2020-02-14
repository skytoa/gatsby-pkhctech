import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const AppDesignImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "services/undraw_progressive_app_m9ms.png" }) {
        childImageSharp {
          fixed(width: 416) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img 
    fixed={data.placeholderImage.childImageSharp.fixed}
    imgStyle={{ objectFit: 'contain' }}
  />
}

export default AppDesignImage;
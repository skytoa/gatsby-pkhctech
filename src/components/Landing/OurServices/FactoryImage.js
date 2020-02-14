import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const FactoryImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "services/factory.png" }) {
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

export default FactoryImage;
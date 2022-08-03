// src/templates/Authors/index.jsx

import React from "react"

import { graphql } from "gatsby"
import {
  GatsbyImage,
  getImage,
} from "gatsby-plugin-image"

import Layout from "../components/layout"

const AuthorTemplate = ({ data, location }) => {
  const { name, bio } = data.authorYaml
  const image = getImage(data.authorYaml.image)

  return (
    <Layout location={location}>
    <div>
      <div className="col-span-2 pr-4">
        <header className="text-center pb-8">
          <GatsbyImage
            className="bio-avatar"
            style={{
              width: 365,
              height: 365,
            }}
            image={image}
            alt="Author"
            backgroundColor={false}
          />
          <h2>{name}</h2>
          {/* <h4 className="text-gray-500">{title}</h4> */}
        </header>
        <section>
          <p>{bio}</p>
        </section>
      </div>
    </div>
    </Layout>
  )
}

export default AuthorTemplate

export const pageQuery = graphql`
  query AuthorById($id: String!) {
    authorYaml(yamlId: { eq: $id }) {
      id
      bio
      name
      image {
        childImageSharp {
          gatsbyImageData(width: 365)
        }
      }
      yamlId
    }
  }
`

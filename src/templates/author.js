// src/templates/Authors/index.jsx

import React from 'react'
import { graphql } from 'gatsby'

export default ({
  data: {
    allAuthorYaml: { edges: authorNodes },
  },
}) => (
  <div>
    {authorNodes.map(({ node: author }, index) => (
      <div key={`author-${author.id}`}>{author.id}</div>
    ))}
  </div>
)

export const pageQuery = graphql`
  query AuthorsQuery {
    allAuthorYaml {
      edges {
        node {
          id
          bio
        }
      }
    }
  }
`
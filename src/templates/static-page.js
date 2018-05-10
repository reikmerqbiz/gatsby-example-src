import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const Template = ({data, location, pathContext}) => {
  const { markdownRemark: page } = data
  console.log(data);
  const { frontmatter, html } = page
  const { path, title } = frontmatter

  return (
    <div>
      <Helmet title={`${frontmatter.title}`} />

      <div>
        <h1>{title}</h1>

        <div dangerouslySetInnerHTML={{__html: html}} />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query PostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`

export default Template

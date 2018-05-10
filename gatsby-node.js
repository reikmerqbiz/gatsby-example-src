const path = require('path')


exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators
  const staticPageTemplate = path.resolve(`src/templates/static-page.js`)

  return graphql(`{
    allMarkdownRemark {
      edges {
        node {
          html
          id
          frontmatter {
            path
            title
          }
        }
      }
    }
  }`)
    .then(result => {
      if (result.errors) {
        return Promise.reject(result.errors)
      }

      const pages = result.data.allMarkdownRemark.edges

      pages.forEach(({node}, index) => {
        createPage({
          path: node.frontmatter.path,
          component: staticPageTemplate
        })
      })
    })
}

const path = require("path")

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
}

// Create Category Pages
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const categoryTemplate = path.resolve("src/components/Category/index.js")
    resolve(
      graphql(`
        {
          allContentfulCategory {
            edges {
              node {
                slug
                categoryName
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }
        result.data.allContentfulCategory.edges.forEach(edge => {
          createPage({
            path: edge.node.slug,
            component: categoryTemplate,
            context: {
              slug: edge.node.slug,
              categoryName: edge.node.categoryName,
            },
          })
        })
        return
      })
    )
  })
}

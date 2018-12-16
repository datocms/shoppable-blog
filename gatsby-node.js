const p = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            posts: allDatoCmsPost {
              edges {
                node {
                  id
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        result.data.posts.edges.forEach(({ node: posts }) => {
          createPage({
            path: `//${posts.slug}/`,
            component: p.resolve(`./src/templates/Post/index.js`),
            context: { slug: posts.slug }
          });
        });
      })
    );
  });
};

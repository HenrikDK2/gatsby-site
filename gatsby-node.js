const Promise = require("bluebird");
const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve("./src/templates/blog-post.js");
    const productPage = path.resolve("./src/templates/product-details.js");
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
            allContentfulProdukt {
              nodes {
                name
                slug
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const products = result.data.allContentfulProdukt.nodes;
        products.forEach((product) => {
          createPage({
            path: `/${product.slug}/`,
            component: productPage,
            context: {
              slug: product.slug,
            },
          });
        });

        const posts = result.data.allContentfulBlogPost.edges;
        posts.forEach((post) => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug,
            },
          });
        });
      })
    );
  });
};

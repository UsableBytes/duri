/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

  // Implement the Gatsby API “createPages”.
exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;

    const getTours = await graphql(`
        {
            allStrapiTours {
                edges {
                    node {
                        id
                    }
                }
            }
        }`
    )
    // Create pages for each Tour
    getTours.data.allStrapiTours.edges.forEach(({ node }) => {
        createPage({
            path: `/${node.id}`,
            component: path.resolve(`./src/templates/tour.js`),
            context: {
                id: node.id,
            },
        })
    })
    return  getTours;
};

const path = require('path');
const _ = require('lodash');
const createCategoriesPages = require('./pagination/create-categories-pages.js');
const createTagsPages = require('./pagination/create-tags-pages.js');
const createPostsPages = require('./pagination/create-posts-pages.js');

const createPages = async({ graphql, actions }) => {
  const { createPage } = actions;

  // 404
  createPage({
    path: '/404',
    component: path.resolve('./src/pages/404.js'),
  });

  // Tags list
  createPage({
    path: '/tags',
    component: path.resolve('./src/templates/tags-list-template.js'),
  });

  // Categories list
  createPage({
    path: '/categories',
    component: path.resolve('./src/templates/categories-list-template.js'),
  });

  // Posts and pages from markdown
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            excerpt(pruneLength: 250)
            html
            id
            timeToRead
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              slug
              title
              next
              template
              thumbnail
            }
          }
        }
      }
    }
  `);

  const { edges } = result.data.allMarkdownRemark;

  _.each(edges, edge => {
    let page = {};
    switch (_.get(edge, 'node.frontmatter.template')) {
      case 'post':
        page = {
          path: edge.node.fields.slug,
          component: path.resolve('./src/templates/post-template.js'),
          context: { slug: edge.node.fields.slug },
        };
        break;
      case 'project':
        page = {
          path: edge.node.fields.slug,
          component: path.resolve('./src/templates/project-template.js'),
          context: { slug: edge.node.fields.slug },
        };
        break;
      case 'page':
        page = {
          path: edge.node.fields.slug,
          component: path.resolve('./src/templates/page-template.js'),
          context: { slug: edge.node.fields.slug },
        };
        break;
      default:
        page = {
          path: edge.node.fields.slug,
          component: path.resolve('./src/templates/page-template.js'),
          context: { slug: edge.node.fields.slug },
        };
    }
    createPage(page);
  });

  // Feeds
  await createTagsPages(graphql, actions);
  await createCategoriesPages(graphql, actions);
  await createPostsPages(graphql, actions);
};

module.exports = createPages;

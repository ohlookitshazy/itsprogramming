const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  console.log(`${node.slug} created!`);

  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date
              categories
              title
              index
            }
            timeToRead
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    let categoryIfExists;

    if(node.frontmatter.categories != undefined || node.frontmatter.categories != null){
      categoryIfExists = node.frontmatter.categories[0].toString();
    } else {
      categoryIfExists = "";
    }

    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
        category: categoryIfExists,
        index: node.frontmatter.index
      }
    })
  });

  const categories = [
    {
      name: "The Basics",
      slug: "the-basics"
    },
    {
      name: "HTML",
      slug: "html"
    },
    {
      name: "CSS",
      slug: "css"
    },
    {
      name: "JavaScript",
      slug: "javascript"
    },
    {
      name: "The Web",
      slug: "the-web"
    },
    {
      name: "Dev Tools",
      slug: "dev-tools"
    },
    {
      name: "Bootstrap",
      slug: "bootstrap"
    },
    {
      name: "jQuery",
      slug: "jquery"
    },
    {
      name: "Advanced HTML",
      slug: "advanced-html"
    },
    {
      name: "Advanced CSS",
      slug: "advanced-css"
    },
    {
      name: "Advanced JavaScript",
      slug: "advanced-javascript"
    },
    {
      name: "Hosting & Deployment",
      slug: "hosting-deployment"
    }
  ];

  categories.forEach(category => {
    createPage({
      path: `/category/${category.slug}`,
      component: path.resolve(`./src/templates/blog-category.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: category.slug,
        name: category.name
      }
    })
  });
}

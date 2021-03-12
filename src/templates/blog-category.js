import * as React from "react"
import { SideNav } from '../components/side-nav';
import { graphql } from "gatsby"
import { Card } from 'primereact/card';
import 'primeflex/primeflex.css';

export default function CategoryPage({ pageContext, data }) {
  return (
    <div className="p-grid">

      <SideNav />

        <div className="p-xl-12 p-lg-12 p-sm-12 category-post-wrapper">
        <h1 className="post-full-card-title">{pageContext.name}</h1>

        {data.allMarkdownRemark.edges.map((post, index) => {
          let formattedDate = post.node.frontmatter.date.substring(0, 10).replace(/\-/g, ".");
          let subTitleString = `${formattedDate} (${post.node.timeToRead} min)`;
          let postURL = post.node.fields.slug;

          return (
            <a href={postURL}>
              <Card
                className="post-card"
                title={post.node.frontmatter.title}
                subTitle={subTitleString}>
                {post.node.excerpt}
              </Card>
            </a>
          )
        })}
      </div>
    </div>
  )
}

export const query = graphql`
query($name: String!) {
    allMarkdownRemark(
      filter: {frontmatter: {categories: {eq: $name}}}
      sort: {fields: frontmatter___index}
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          timeToRead
          frontmatter {
            title
            date
            tags
          }
          excerpt
        }
      }
    }
  }
`
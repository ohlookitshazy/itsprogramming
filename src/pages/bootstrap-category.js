import * as React from "react"
import { SideNav } from '../components/side-nav';
import { graphql } from "gatsby"
import { Card } from 'primereact/card';
import 'primeflex/primeflex.css';
export const query = graphql`
  query {
    allMarkdownRemark(
      filter: {frontmatter: {categories: {eq: "Bootstrap"}}}
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

// markup
const BootstrapPage = ({ data }) => {
  return (
    <div className="p-grid">

      <div className="p-col-2">
        <SideNav />
      </div>
      <div className="p-col-6 p-offset-1">
        <h1 className="post-full-card-title">Bootstrap</h1>

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

export default BootstrapPage

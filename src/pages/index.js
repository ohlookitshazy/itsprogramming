import * as React from "react"
import 'primeflex/primeflex.css';
// import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/md-dark-indigo/theme.css';
import { SideNav } from '../components/side-nav';
import { graphql } from "gatsby"
import { Card } from 'primereact/card';

// markup
const IndexPage = ({ data }) => {
  return (
    <div className="p-grid">
        <SideNav />
      <div className="p-col">
        <h1 className="index-title">Welcome!</h1>
        <p className="index-paragraph">This is a blog.<br />
          It's an attempt to provide a concise way to make programming more approachable.<br />
          No previous programming experience needed.<br/><br/>
          Currently at <b>{data.allMarkdownRemark.totalCount}</b> posts! 🙌</p>
        <div className="index-post-wrapper">
          <h2 className="index-post-heading">10 latest posts:</h2>
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
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, limit: 10) {
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
          timeToRead
          excerpt
        }
      }
      totalCount
    }
  }
`

export default IndexPage

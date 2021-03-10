import * as React from "react"
import { SideNav } from '../components/side-nav';
import { graphql } from "gatsby"
import { Card } from 'primereact/card';
import 'primeflex/primeflex.css';

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <div className="p-grid">
      <SideNav />

      <div className="p-xl-12 p-lg-12 p-sm-12">
      <h1 className="post-full-card-title">{post.frontmatter.title}</h1>

            <Card className="post-full-card">

              <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
            </Card>
      </div>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
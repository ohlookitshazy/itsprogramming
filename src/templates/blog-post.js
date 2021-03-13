import * as React from "react"
import { SideNav } from '../components/side-nav';
import { graphql } from "gatsby"
import { Card } from 'primereact/card';
import 'primeflex/primeflex.css';

export default function BlogPost({ pageContext, data }) {
  const post = data.markdownRemark;
  const categoryPosts = Object.entries(data.allMarkdownRemark)[0][1];
  let currentPostIndex = 0;
  let previousPostIndex;
  let nextPostIndex;
  let nextPost = null;
  let previousPost = null;

  if (pageContext != undefined || pageContext != null) {
    currentPostIndex = pageContext.index;
  }

  previousPostIndex = currentPostIndex - 1;
  nextPostIndex = currentPostIndex + 1;

  if (categoryPosts[previousPostIndex] != undefined || categoryPosts[previousPostIndex] != null) {
    previousPost = categoryPosts[previousPostIndex].node;
  }
  if (categoryPosts[nextPostIndex] != undefined || categoryPosts[nextPostIndex] != null) {
    nextPost = categoryPosts[nextPostIndex].node;
  }

  return (
    <div className="p-grid">
      <SideNav />

      <div className="p-xl-12 p-lg-12 p-sm-12">
        <h1 className="post-full-card-title">{post.frontmatter.title}</h1>

        <Card className="post-full-card">
          <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
        </Card>

        <div className="p-grid post-footer-pagination">
          <div className="p-col">
            <PreviousPostNav previousPost={previousPost} />
          </div>
          <div className="p-col">
            <NextPostNav nextPost={nextPost} />
          </div>
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  query($slug: String!, $category: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        index
      }
    }
    allMarkdownRemark(
    filter: {frontmatter: {categories: {eq: $category}}}
    sort: {fields: frontmatter___index, order: ASC}
  ) {
    edges {
      node {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date
          title
          categories
          index
        }
        timeToRead
      }
    }
  }
  }
`

function NextPostNav(props) {
  if (props.nextPost != undefined || props.nextPost != null) {
    let formattedDate = props.nextPost.frontmatter.date.substring(0, 10).replace(/\-/g, ".");
    let subTitleString = `${formattedDate} (${props.nextPost.timeToRead} min)`;
    let postURL = props.nextPost.fields.slug;

    return (
      <a href={postURL}>
        <Card
          title={props.nextPost.frontmatter.title}
          subTitle={subTitleString}>
          {props.nextPost.excerpt}
        </Card>
      </a>
    );
  }
  return ("");
}

function PreviousPostNav(props) {
  if (props.previousPost != undefined || props.previousPost != null) {

    let formattedDate = props.previousPost.frontmatter.date.substring(0, 10).replace(/\-/g, ".");
    let subTitleString = `${formattedDate} (${props.previousPost.timeToRead} min)`;
    let postURL = props.previousPost.fields.slug;

    return (
      <a href={postURL}>
        <Card
          title={props.previousPost.frontmatter.title}
          subTitle={subTitleString}>
          {props.previousPost.excerpt}
        </Card>
      </a>
    );
  } else {
    return ("");
  }

  function findNestedObj(entireObj, keyToFind, valToFind) {
    let foundObj;
    JSON.stringify(entireObj, (_, nestedValue) => {
      if (nestedValue && nestedValue[keyToFind] === valToFind) {
        foundObj = nestedValue;
      }
      return nestedValue;
    });
    return foundObj;
  }
}
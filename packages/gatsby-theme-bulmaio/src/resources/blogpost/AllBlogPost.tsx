import React, { FunctionComponent } from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../../components2/Layout'
import { BlogPostResource } from './models'
import { PageContext } from '../../components2/models'

export interface AllBlogPostProps {
  data: {
    allBlogPost: {
      nodes: BlogPostResource[]
    }
  }
  pageContext: PageContext
}

const AllBlogPost: FunctionComponent<AllBlogPostProps> = ({
                                                            data: { allBlogPost },
                                                            pageContext: { numPages }
                                                          }: AllBlogPostProps) => {
  return (
    <Layout>
      <h1>All Blog Posts</h1>
      <ul>
        {allBlogPost.nodes.map(node => (
          <li key={node.slug}>
            <Link to={node.slug}>{node.title}</Link>
          </li>
        ))}
      </ul>
      {Array.from({ length: numPages }, (_, i) => (
        <Link
          key={`pagination-number${i + 1}`}
          to={`/blogposts/${i === 0 ? '' : i + 1}`}
          style={{ paddingRight: '1em' }}
        >
          {i + 1}
        </Link>
      ))}
    </Layout>
  )
}

// noinspection JSUnusedGlobalSymbols
export default AllBlogPost

// noinspection JSUnusedGlobalSymbols
export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allBlogPost(limit: $limit, skip: $skip) {
      nodes {
        title
        slug
        body
      }
    }
  }
`

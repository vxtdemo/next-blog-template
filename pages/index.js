import React from 'react'
import Layout from '../components/layout'
import PostItem from '../components/postItem'
import fetch from 'isomorphic-fetch'
import { Link } from '../routes'

const IndexPage = ({posts}) => (
  <Layout>
    <ul className="example">
      { posts.map(post => (
        <li className="blog--post-item" key={ post.id }>
          <PostItem key={ post.id } post={ post } />
        </li>
      )) }
    </ul>
  </Layout>
)

IndexPage.getInitialProps = async ({req}) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const json = await res.json()
  return { posts: json }
}

export default IndexPage
import React from 'react'
import Next from 'next/link'
import Layout from '../components/layout'
import fetch from 'isomorphic-fetch'

const toUpperCase = (str) => {
  var upperCased = []
  str.split(" ")
    .forEach(str => {
      upperCased.push(`${str.substring(0,1).toUpperCase()}${str.substring(1,str.length)}`)
    })
  return upperCased.join(" ")
}

const post = ({post}) => (
  <Layout>
      <h1>{ toUpperCase(post.title) }</h1>
      <p>{post.body}</p>
  </Layout>
)

post.getInitialProps = async ({query}) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?title=${query.slug}`)
  const json = await res.json()
  return { post: json[0] }
}

export default post
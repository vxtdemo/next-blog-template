import React from 'react'
import { Link } from '../routes'

const postItem = ({post}) => {
  if (post.title !==  undefined) {
    return (
      <Link route='post' params={{ slug: post.title }}>
        <a>
          <h3>{ post.title }</h3>
          <p>{ post.body }</p>
        </a>
      </Link>
    )
  } else {
    return (<></>) //address weird error from fetch//
  }
}

export default postItem
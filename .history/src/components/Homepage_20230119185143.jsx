import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = (props) => {
    const home = props.posts.map((post, index) => {
        return(
            <div key={index}>
                <h1>{post.title}</h1>
                
        )
  return (
    <div>Homepage</div>
  )
}

export default Homepage
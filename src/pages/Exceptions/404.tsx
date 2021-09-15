import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
      <h1>not found, please go back!</h1>
      <Link to={{ pathname: '/index.overkill' }}>Exit</Link>
    </div>
  )
}

export default NotFound

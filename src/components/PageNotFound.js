import React from 'react'
import {Link} from 'react-router-dom';
const PageNotFound = () => {
  return (
    <div>
        <h1>404 Page</h1>
        <p>This url not exist</p>
        <p>
            <Link to="/">Go To Home Page</Link>
        </p>
    </div>
  )
}

export default PageNotFound
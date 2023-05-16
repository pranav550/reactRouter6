import React from 'react'
import {Link} from 'react-router-dom';
const About = () => {
  return (
    <div>
        <h1>About</h1>
        <ul>
            <li><Link to="/">Go To Home Page</Link></li>
            <li><Link to="/user/anil" state={{name:'anil', age:34}}>Anil</Link></li>
            <li><Link to="/user/pranav" state={{name:"pranav", age:34}}>Pranav</Link></li>
        </ul>
    </div>
  )
}

export default About
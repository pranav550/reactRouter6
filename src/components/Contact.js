import React from 'react'
import { Link,Outlet } from 'react-router-dom'
const Contact = () => {
  return (
    <div>
    <h1>Contact</h1>
    <h2>Here We are some other bussiness</h2>
    <br/>
    <Link to="company">Company</Link>
    <Link to="channel">Channel</Link>
    <Link to="other">Other</Link>
    <Outlet/>
    </div>
  )
}

export default Contact
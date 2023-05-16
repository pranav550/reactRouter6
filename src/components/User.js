import React from 'react'
import {useParams,Link,useLocation} from 'react-router-dom';
const User = () => {
    const params = useParams();
    const {name} = params;
    const location = useLocation();
    console.log(location)
  return (
    <div>
        <p>This is {name} profile</p>
        <p><Link to="/">Go To Home Page</Link></p>
    </div>
  )
}

export default User
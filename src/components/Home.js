import React from 'react'
import {Link,useNavigate} from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  const navToPage = (url)=>{
    if(url=='about'){
      navigate('/about')
    }else{
      navigate('/filter')
    }
   
  }

 
  return (
    <div>
        <h1>Home</h1>
        <ul>
            <li><Link to="/about">Go To About Page</Link></li>
            <li><Link to="/user/anil">Anil</Link></li>
            <li><Link to="/user/pranav">Pranav</Link></li>
            <br />
            <button onClick={()=>navToPage('about')}>Go To About Page</button>
            <br />
            <button onClick={()=>navigate('filter')}>Go To Filter Page</button>
        </ul>
    </div>
  )
}

export default Home
import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const login=()=>{
        localStorage.setItem('login',true)
        navigate('/')
    }
    const navigate = useNavigate();
    useEffect(()=>{
        let login = localStorage.getItem('login');
        if(!login){
            navigate('/login')
        }
    })
  return (
    <div>
        <h1>Login Page</h1>
        <input type="text" placeholder='email' /><br/>
        <input type="text" placeholder='password' /><br/>
        <button onClick={login}>Login</button>
    </div>
  )
}

export default Login
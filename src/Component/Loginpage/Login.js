import React,{ useState }from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login=({setLoginUser})=>{
    const navigate=useNavigate()

    const[user,setUser]=useState({
        email:'',
        password:''
    })
    const handleChange=(e)=>{
        const { name,value }  = e.target
        setUser({
            ...user,
            [name]:value
        })
        
    }
    const login=()=>{
        axios.post('http://localhost:5050/login',user)
        .then(res=>{
        alert(res.data.message) 
        setLoginUser(res.data.user)
        navigate('/')
    })
}
    return(
     <div className='login'>
        <h1>Log-In</h1>
        <input type="text" name='email' value={user.email} onChange={handleChange} placeholder='Enter Your Email'></input><br></br>
        <input type="password" name='password' value={user.password} onChange={handleChange} placeholder='Enter Your Password'></input>
        <div className='button' onClick={login}>Login</div>
        <div>or</div>
        <div className='button' onClick={()=>navigate("/register")}>Register</div>
     </div>
    );
}
export default Login;
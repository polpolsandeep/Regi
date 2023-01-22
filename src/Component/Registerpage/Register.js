import React,{useState} from "react";
import axios from 'axios';
import './Register.css';
import { useNavigate } from 'react-router-dom';


const Register=()=>{
   const navigate=useNavigate()

    const[user,setUser]=useState({
        name:'',
        email:'',
        password:'',
        reEnterPassword:''
    })
    const handleChange= e =>{
        const { name,value }= e.target
        setUser({
            ...user,
            [name]:value
        })
    }
        const register = () => {
            const {name,email,password,reEnterPassword } = user
            if(name && email && password && (password === reEnterPassword)){          
                axios.post('http://localhost:5050/register',user)
                .then(res=> {
                    alert(res.data.message)
                    navigate('/login')
                })
            }else{
                alert("Not active")
            }  
        }
    return(
    <div className='register'>
        {console.log("User",user)}
        <h1>Register</h1>
        <input type="text" name="name" value={user.name} placeholder='Your Name' onChange={handleChange} ></input><br/>
        <input type="text" name="email" value={user.email} placeholder='Your Email' onChange={handleChange}></input><br/>
        <input type="password" name="password" value={user.password} placeholder='Your Password' onChange={handleChange}></input><br/>
        <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder='Re-Enter Your Password' onChange={handleChange}></input>
        <div className='button' onClick={register}>Register</div>
        <div>or</div>
        <div className='button' onClick={()=>navigate("/login")}>Login</div>
    </div>
    );
}
export default Register;
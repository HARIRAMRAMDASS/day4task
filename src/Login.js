import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.js'
import Header from './Header.js';
import './Login.css';
const Login = () => {
    const [username , setuserName] = useState("");
    const navigate = useNavigate();

    const handleSubmit=()=>{
        if(username==="admin"){
            navigate('/Dashboard');
        }
        else{
            alert("Invalid Credintials");
        }
    }
    
  return (
    <>
        <Header/>
      <div className='login'>
          <h3 class="que">Login:</h3>
          <input type='text' placeholder='Enter your name' onChange={(e)=> setuserName(e.target.value)}></input>
          <button onClick={handleSubmit} style={{marginLeft:'20px'}}>Submit</button>
      </div>
    </>
  )
}

export default Login;
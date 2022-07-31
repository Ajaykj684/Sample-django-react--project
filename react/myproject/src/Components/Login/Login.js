import React,{useState, useContext} from 'react'
import AuthContext from '../../context/AuthContext'
import './Login.css'
import Logo from '../logo.png'

import { useNavigate } from "react-router-dom";

function Login() {
  
  let {loginUser } = useContext(AuthContext)

  const history = useNavigate();

  


  
  return (
   <div className='maindiv'>
    <div class="hed">
     <h3 className='txet'>Login   Here !!</h3>
     </div>
    <div className='boxv'>
    <div className="img1">
    <img  className="imae" width="100px" height="100px" src={Logo}></img>
    </div>
      <div className='inner'>
        <form onSubmit={loginUser}>
        <input className='input'
        name="email"
        
        placeholder='Username..'></input>

        <input className='input' 
        
        name="password"
        placeholder='Password..'></input>
        <button type="submit" className='Butn'>Submit</button>
        
        <h6 onClick={()=>{history('/signup')}} className='signup'>Sign Up</h6>
        </form>

      </div>
      


    </div>


   </div>
    
  )
}

export default Login
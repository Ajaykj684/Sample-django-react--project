import React,{useState,useContext} from 'react'
import './addUser.css'

import {Navigate, useNavigate} from 'react-router-dom'
import Axios from 'axios';

export default function Signup() {

  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const history = useNavigate();

const formdata=(e)=>{
  e.preventDefault();

Axios({
    method: 'post',
    url: "http://127.0.0.1:8000/add/",
    data: {
      username:username,
      email:email,
      password:password,
      phone:phone,
    },
    headers: {
    
      "content-type": "application/json"
    }
  }).then((response)=>{
      
    if(response.status === 200 ){
      history('/admin')
    }else{
      alert('something went wrong !')
    }
  })
  }

  return (
    <div className='maindiv'>
      <div className='heds'>
      <h2 className='txxtt'>Add User</h2>
      </div>
    <div className='box'>
      
      <div className='inner'>
        <form onSubmit={formdata}>
        <input className='input' type="text" 
            value={username} 
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="username"
          placeholder='Name..'>
        </input>
        <input className='input' type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="email"
            name='email'
            placeholder='Email..'>
         </input>
        <input className='input' type="password" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="password"
            name='password'
            placeholder='Password..'>

        </input>
        <input className='input' type="number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            placeholder='Phone Number..'>
         </input>
        <button className='Butn'>Submit</button>
     
        <h6 onClick={()=>{history('/admin')}} className='login'>Back</h6>

        </form>
      </div>
      


    </div>


   </div>
  )
}


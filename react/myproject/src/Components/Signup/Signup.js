import React,{useState,useContext} from 'react'
import './Signup.css'
import Logo from '../logo.png'
import {useNavigate} from 'react-router-dom'

import AuthContext from '../../context/AuthContext'


export default function Signup() {

  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const history = useNavigate();
  let {signupUser } = useContext(AuthContext)
  let {err} = useContext(AuthContext)


  return (
    <div className='maindiv'>
      <div className='heds'>
     
      </div>
    <div className='box'>
      <div className='iimg'>
            <img  className="image" width="100px" height="100px" src={Logo}></img>
      </div>
      <div className='err'> {err} </div>
      <div className='inner'>
    
        <form  onSubmit={signupUser} >
        <input className='input' type="text" 
            value={username} 
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="username"
            required
          placeholder='Name..'>
        </input>
        <input className='input' type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="email"
            name='email'
            required
            placeholder='Email..'>
         </input>
        <input className='input' type="password" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="password"
            name='password'
            required
            placeholder='Password..'>

        </input>
        <input className='input' type="number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            name='phone'
            placeholder='Phone Number..'>
         </input>
        <button className='Butn'>Submit</button>
        
        <h6 onClick={()=>{history('/login')}} className='login'>Login</h6>

        </form>
      </div>
      


    </div>


   </div>
  )
}


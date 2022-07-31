import React,{useState,useContext} from 'react'
import './Signup.css'
import Logo from '../logo.png'
import {useNavigate} from 'react-router-dom'
import Axios from 'axios';
import AuthContext from '../../context/AuthContext'


export default function Signup() {

  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const history = useNavigate();
  let {signupUser } = useContext(AuthContext)


// const formdata=(e)=>{
//     e.preventDefault();
  
  // Axios({
  //     method: 'post',
  //     url: "http://127.0.0.1:8000/signup/",
  //     data: {
  //       username:username,
  //       email:email,
  //       password:password,
  //       phone:phone,
  //     },
  //     headers: {
      
  //       "content-type": "application/json"
  //     }
  //   }).then((response)=>{
        
  //     if(response.status === 200 ){
  //       history('/')
  //     }else{
  //       alert('something went wrong !')
  //     }
  //   })
  //   }
  

  return (
    <div className='maindiv'>
      <div className='heds'>
      <h2 className='txxtt'>SignUp </h2>
      </div>
    <div className='box'>
      <div className='iimg'>
            <img  className="image" width="100px" height="100px" src={Logo}></img>
      </div>

      <div className='inner'>
        <form  onSubmit={signupUser} >
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


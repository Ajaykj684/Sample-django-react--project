import React,{useContext,useState,useEffect} from 'react'
import './Adminlogin.css'
import AuthContext from '../../../context/AuthContext'
import Logos from '../logo1.png'
import { useNavigate } from 'react-router-dom'



function Adminlogin() {
 
  let {loginAdmin,user } = useContext(AuthContext)
  const history = useNavigate()
  let {err} = useContext(AuthContext)

  useEffect(()=>{
    user ? user.is_admin === true && history('/admin'):history('/adminlogin')
  },[])


  return (
    <div className='main'>
      <div className="txttt">
     <h1 >Welcome Back  Admin !!</h1>
     </div>
    <div className='bx'>

        <div className="img">
        <img  className="image1" width="100px" height="100px" src={Logos}></img>
        </div>
         <div className='err'> {err} </div>
      <div className='innerr'>
        <form onSubmit={loginAdmin} >
        <input className='inputt' 
        name="email"
        placeholder='Username..'></input>
       

        <input className='inputt'
        name="password"
         placeholder='Password..'></input>
        <button type="submit" className='Butnn'>Submit</button>
       
        </form>
      </div>
     
    </div>


   </div>
  )
}

export default Adminlogin
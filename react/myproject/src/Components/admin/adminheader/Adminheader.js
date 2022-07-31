import React,{useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import './Adminheader.css'
import AuthContext from '../../../context/AuthContext'


function Adminheader() {
  const history = useNavigate();
  let {user ,logoutAdmin} = useContext(AuthContext)
  return (
    <div className='Parent'>
    <div className='childd'>
      <div className='head'>
    <h3>Welcome Admin </h3>
    </div>
    <div className='buttn'>
   
    {/* <span onClick={()=>{history('/adminlogin')}} className='buttnA'>Login</span>  */}
    { user && <p onClick={logoutAdmin} >Logout</p>}
            
        
    </div>
    </div>
  </div>

  )
}

export default Adminheader
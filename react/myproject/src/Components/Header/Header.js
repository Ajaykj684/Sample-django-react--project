import React,{useContext} from 'react'
import './Header.css'
import AuthContext from '../../context/AuthContext'

import {useNavigate,Link} from 'react-router-dom'

function Header() {
  let {user ,logoutUser} = useContext(AuthContext)
  const history = useNavigate()
  return (
 
      <div className='Parentdiv'>
        <div className='childdiv'>
          <div className='heading'>
        <h2>Welcome</h2>
        </div>
        <div className='button'>
    
        { user ? (
            <button className='btn1' onClick={logoutUser} >Logout</button>
        ):(<button className='btn2' onClick={()=>{history("/login")}} >Login</button>
        )}
          { user ? ( <a></a>):(
          <button className='btn1' onClick={()=>{history('/signup')}} >Signup</button> 
          )}
          
        </div>
        </div>
      </div>
 
  )
}

export default Header
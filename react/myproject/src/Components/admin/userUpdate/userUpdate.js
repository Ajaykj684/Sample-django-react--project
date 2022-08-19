import React,{useState,useEffect} from 'react'
import './userUpdate.css'
import {useNavigate, useLocation} from 'react-router-dom'
import Axios from 'axios';
export default function Signup() {

  const history = useNavigate();

  const { state } = useLocation();
  const { id } = state;
  console.log(id)
  let [val,setValue]=useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
 

  useEffect(()=>{
    Axios.get(`http://127.0.0.1:8000/update/${id}`).then((res)=>setValue(res.data))
  },[])




  let updateUser = async (e)=>{

    e.preventDefault()
 
    let response = await fetch(`http://127.0.0.1:8000/update/${id}`, {
        method:'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({'username':e.target.username.value,'phone':e.target.phone.value,'email':e.target.email.value, 'password':e.target.password.value})
    })
    let data = await response.json()
    
    
    if(response.status === 200){
        
        Navigate('/login')

    }else{
        setError('something went wrong !')
    }

}  



  return (
    <div className='newdiv'>
      
    <div className='box'>
    

      <div className='inner'>
        <form>
        <input className='input' type="text" 
            
          name="username"
          value={val.username}
          onChange={(e)=>setValue(e.target.value)}
          placeholder="username">
        </input>
        <input className='input' type="email"
            
            name='email'
            value={val.email}
            onChange={(e)=>setValue(e.target.value)}
            placeholder="email">
              
         </input>
        {/* <input className='input' type="password" 
           
            name='password'
            value={val.password}
            placeholder='password..'>

        </input> */}
        <input className='input' type="number"
           name='phone'
           value={val.phone}
           onChange={(e)=>setValue(e.target.value)}
           placeholder='phone'>
         </input>
        <button className='Butn' onClick={()=>{updateUser(id)}} >Submit</button>
       
        <h6 onClick={()=>{history('/admin')}} className='login'>Back</h6>

        </form>
      </div>
      


    </div>


   </div>
  )
}


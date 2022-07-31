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


  useEffect(()=>{
    Axios.get(`http://127.0.0.1:8000/update/${id}`).then((res)=>setValue(res.data))
  },[])
  console.log(val,"99999999999999999")


  //  const handleUpdate = (id) => {
        
  //         Axios.get(`http://127.0.0.1:8000`)
  //             .then((res) => {
  //                 setUpdate(res.data.filter(value => {
  //                     return value.id === id
  //                 }));
  //                 console.log(update,"lll")
                
  //             }).catch(() => {
  //                 alert("Something went wrong");
  //             })
              
  //         }


  return (
    <div className='newdiv'>
      
    <div className='box'>
    

      <div className='inner'>
        <form >
        <input className='input' type="text" 
            
            name="username"
          value={val.username}
          placeholder="username">
        </input>
        <input className='input' type="email"
            
            name='email'
            value={val.email}
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
            placeholder='phone'>
         </input>
        <button className='Butn'>Submit</button>
       
        <h6 onClick={()=>{history('/admin')}} className='login'>Back</h6>

        </form>
      </div>
      


    </div>


   </div>
  )
}


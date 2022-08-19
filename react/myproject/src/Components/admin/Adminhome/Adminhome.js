import React,{useEffect,useState,useContext} from 'react'
import Axios from 'axios';
import './Adminhome.css'
import {useNavigate} from 'react-router-dom'
import 'react-confirm-alert/src/react-confirm-alert.css';
import { confirmAlert } from 'react-confirm-alert';
import AuthContext from '../../../context/AuthContext'



function Adminhome() {
    const [data,setData]=useState([])
    const [state,setState]=useState(false)
    const history = useNavigate();
    let {user } = useContext(AuthContext)

    useEffect(()=>{
        Axios.get("http://127.0.0.1:8000/").then((res)=>setData(res.data))
      },[state])
    
    useEffect(()=>{
       
        user ? user.is_admin === true && history('/admin'):history('/adminlogin')
      },[])
    
      
      const handleDelete = (id) => {
        
       
        confirmAlert({
          title: 'Confirm to Delete',
          message: 'Are you sure to do this.',
          buttons: [
            {
              label: 'Yes',
              onClick: () =>  Axios.post(`http://127.0.0.1:8000/delete/${id}`)
              .then(() => {
               
                  const newData = data.filter(value => {
                      return value.id !== id
                  });
                  setData(newData);
                
                  
              }).catch(() => {
                  alert("Something went wrong");
              })
            },
            {
              label: 'No',
              
            }
          ]
        })
      
            
        }



       
  return (
   
   <div className='row'>     
   <button className='btn3' onClick={() => history('/addUser')}  >ADD</button>
   <div className='tablediv'>
    <table className="table table-bordered">
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Phone</th>
        <th scope="col">Edit</th>
       
        {/* <th scope="col">Active</th> */}
         <th scope="col">Delete</th>
      </tr>
    </thead>
    <tbody>
    
        {data.map((value)=>(
      
      <tr>
      <th scope="row">{value.id}</th>
        <th scope="row">{value.username}</th>
        <th scope="row">{value.email}</th>
        <th scope="row">{value.phone}</th>
         
        
        <th scope="row"><button className='btn5' onClick={() =>  {history( `/userUpdate`,{ state: { id: value.id } })}} >Edit</button></th>

        {/* <th scope="row" >{user.is_active=== false ?<button className='btn1' onClick={() => {handleDelete(value.id)}} >Block</button>
        :<button className='btn7' onClick={() => {handleDelete(value.id)}} >UnBlock</button>}</th>
         */}


        <th scope="row" ><button className='btn1' onClick={() => {handleDelete(value.id)}} >Delete</button></th>
        
        
                
      </tr>
      ))}
    </tbody>
  </table>
  </div>
  </div>
  )
}

export default Adminhome
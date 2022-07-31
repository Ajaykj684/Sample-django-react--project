import {useEffect} from 'react'
import Axios from 'axios';


import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom'


import Home from './Pages/Page';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Adminhome from './Pages/Adminhome';
import Adminlogin from './Pages/Adminlogin';
import UpdateUser from './Pages/UpdateUser';
import AddUser from './Pages/AddUser';
import {AuthProvider} from './context/AuthContext'


function App() {

  useEffect(()=>{
    Axios.get("http://localhost:8000").then((res)=>console.log(res.data))
  },[])




  return (
    <>
  
      <Router>
      <AuthProvider>
      <Routes>
        
        <Route exact path="/" element={<Home />} /> 
      
    
        <Route path="/signup" element={<Signup />} /> 
      
    
        
        <Route path="/login" element={<Login />} /> 
   
    
        <Route path="/admin" element={<Adminhome />} /> 
    
    
     
        <Route path="/adminlogin" element={<Adminlogin />} /> 

        <Route path="/addUser" element={<AddUser />} /> 

        <Route path="/userUpdate" element={<UpdateUser />} /> 
       
        </Routes>
        </AuthProvider>
        </Router>
    
    
        </>
  );
}

export default App;

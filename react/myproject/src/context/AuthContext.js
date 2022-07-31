import {createContext, useEffect,useState} from 'react'
import jwtDecode from 'jwt-decode';
import {useNavigate} from 'react-router-dom'



const AuthContext = createContext()


export default AuthContext;


export const AuthProvider = ({children}) => {
    
    
    let [authTokens,setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user,setUser] = useState(()=> localStorage.getItem('authTokens') ? jwtDecode(localStorage.getItem('authTokens')) : null)
    let [loading,setLoading] = useState(true)
    const [error,setError]=useState(false)
    const [id,setid]=useState({})

    

    const Navigate = useNavigate()

    let loginUser = async (e)=>{

        e.preventDefault()
     
        let response = await fetch('http://127.0.0.1:8000/token/', {
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({'email':e.target.email.value, 'password':e.target.password.value})
        })
        let data = await response.json()
        
        
        if(response.status === 200){
            setAuthTokens(data)
            setUser(jwtDecode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
            Navigate('/')

        }else{
            alert('something went wrong !')
        }

    }  



    let signupUser = async (e)=>{

        e.preventDefault()
     
        let response = await fetch('http://127.0.0.1:8000/signup/', {
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
            alert('something went wrong !')
        }

    }  




    let updateUser = async (e)=>{

        e.preventDefault()
     
        let response = await fetch('http://127.0.0.1:8000/update/', {
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
            alert('something went wrong !')
        }

    }  






    
    let logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        Navigate('/login')
    }

    let updateToken = async ()=>{
        
        let response = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'refresh': authTokens.refresh})
        })
        let data = await response.json()

        if (response.status === 200 ){
            setAuthTokens(data)
            setUser(jwtDecode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))

        }else{
            logoutUser()
        }
        
    }



    let loginAdmin = async (e)=>{

        e.preventDefault()
     
        let response = await fetch('http://127.0.0.1:8000/token/', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'email':e.target.email.value, 'password':e.target.password.value})
        })
        let data = await response.json()
        
        
        if(response.status === 200){
            setAuthTokens(data)
            setUser(jwtDecode(data.access))
            
            localStorage.setItem('authTokens', JSON.stringify(data))
            Navigate('/admin')

        }else{
          
                setError(error.response.data.message)
             
        }

    } 


    let logoutAdmin = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        Navigate('/adminlogin')
    }



    

  


    let userAdd = async (e)=>{

        e.preventDefault()
        console.log("look")
     
        let response = await fetch('http://127.0.0.1:8000/adduser/', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'username':e.target.username.value, 'password':e.target.password.value, 'password':e.target.password.value,'phone':e.target.phone.value,'email':e.target.email.value,'is_active':false})
        })
        let data = await response.json()
        
        
        if(response.status === 200){
           
            Navigate('/admin')

        }else{
            alert('something went wrong !')
        }

    } 




    let contextData = {
        user:user,
        authTokens:authTokens,
        loginUser:loginUser,
        logoutUser:logoutUser,
        loginAdmin:loginAdmin,
        logoutAdmin:logoutAdmin,
        userAdd:userAdd,
        error:error,
        signupUser:signupUser

    }









    useEffect(()=>{

        let fourMinutes = 1000 * 60 * 4

        let interval =  setInterval(()=>{
            if(authTokens){
                updateToken()
            }
        },fourMinutes)
        return ()=> clearInterval(interval)

    },[authTokens,loading])

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}
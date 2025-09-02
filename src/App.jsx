import { useEffect, useState } from "react"
import MainRouter from "./MainRouter"
import { jwtDecode } from "jwt-decode"
import setAxiosAuthToken from "./utils/setAxiosAuth"

function App() {
  const [user, setUser] = useState(null)

  //what do we do if we want to execute a function once on refresh
  useEffect(() => {
    const token = window.localStorage.getItem('jwt')
    if(token){
      handleUserLogin(token)
    }
  }, [])
  

  const handleUserLogin = (jwt) =>{
    //check jwt expired
    const decodedToken = jwtDecode(jwt)
    if(decodedToken && decodedToken.exp > (Date.now() / 1000)){ //check expiration
      window.localStorage.setItem('jwt', jwt)
      setUser(decodedToken)
      setAxiosAuthToken(jwt) // add jwt to authorization header

    }
    //if not, setUser
  }

  const handleUserLogout = () =>{
    setUser(null)
    setAxiosAuthToken()
    window.localStorage.removeItem('jwt')
  }

  return (
    <div>
      <MainRouter 
        user = {user} 
        handleUserLogin = {handleUserLogin} 
        handleUserLogout={handleUserLogout}/>
    </div>
  )
}

export default App
import { Navigate } from "react-router-dom"
import checkIfUserIsAuth from "../utils/checkIfUserIsAuth"

function PrivateRoute({children}) {
  if(checkIfUserIsAuth()){
    return children
  }else{
    return(
        <Navigate to='/sign-in'/>
    )
  }
}

export default PrivateRoute


//MainRouter
// <PrivateRoute>
//    <Home/>
// <PrivateRoute>
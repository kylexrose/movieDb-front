import { jwtDecode } from "jwt-decode";

const checkIfUserIsAuth = () => {
    // jwt exists
    // if expired
    // if valid => return true
    // else => return false
    const token = window.localStorage.getItem('jwt')
    if(!token || jwtDecode(token).exp < (Date.now() / 1000)){
        return false  
    }else{
        return true
    }
}

export default checkIfUserIsAuth
import Axios from './Axios' //bring in the Axios instance

const setAxiosAuthToken = (jwtToken) =>{ // make a function do the work.
    if(jwtToken){ //whenever you interact with the jwt, attach to the header
        Axios.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`
    }else{ // if this function is called without a jwt, it deletes the header if it exists
        delete Axios.defaults.headers.common["Authorization"]
    }
}

export default setAxiosAuthToken
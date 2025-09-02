import axios from 'axios'
//an axios instance allows you to set options/parameters
//about your requests

const Axios = axios.create({ 
    baseURL: import.meta.env.DEV === true //if running in development,
            ? "http://localhost:3000" // use localhost to call backend
            : "DEPLOY CLOUD ADDRESS", // if off an npm run build, this domain
    timeout: 50000 // after 50s a call will shutoff if a response isn't heard
})

export default Axios
import React, { useEffect, useState } from 'react'
import Axios from '../../utils/Axios'

function Profile() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    const fetchUserData = async()=>{
      try {
        const response = await Axios.get('/users/get-user') //the header will attach the user id to find
        const {firstName, lastName, email, username} = response.data.payload //make sure this route exists and functions in backend
        setFirstName(firstName)
        setLastName(lastName)
        setEmail(email)
        setUsername(username)
      } catch (error) {
        console.log(error)
        //maybe toast here if unable to retrieve
      }
    }
    fetchUserData()
  }, [])
  

  const handleSaveChanges = async ()=>{
    try {
      await Axios.put('/users/update-user', {//user id should be found with res.locals
        firstName,
        lastName,
        email,
        username
      })
      //maybe a toast here
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div style={{display: 'flex', justifyContent:'center', alignItems:'center', height: '90vh'}}>
        <div className="update-container">
            <h3>Update Profile</h3>
            <form>
                <div className="input-div">
                    <input 
                        placeholder='First Name'
                        value={firstName} 
                        name = "firstName"
                        onChange={e=> setFirstName(e.target.value)}/>
                </div>
                <div className="input-div">
                    <input 
                        placeholder='Last Name'
                        value={lastName} 
                        name = "lastName"
                        onChange={e=> setLastName(e.target.value)}/>
                </div>
                <div className="input-div">
                    <input 
                        placeholder='Username'
                        value={username} 
                        name = "username"
                        onChange={e=> setUsername(e.target.value)}/>
                </div>
                <div className="input-div">
                    <input 
                        placeholder='Email'
                        value={email} 
                        name = "email"
                        onChange={e=> setEmail(e.target.value)}/>
                </div>
                <button onClick={handleSaveChanges}>Save</button>
            </form>
        </div>
      </div>
  )
}

export default Profile

// make name, email, and username on the screen
// mainRouter > make a route
// when click their username, send to profile page
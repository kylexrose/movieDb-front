import { Link } from 'react-router-dom'
import './Nav.css'

function Nav({user, handleUserLogout}) {
  return (
    <nav className="Navbar">
        <div className="h1-logo">
          <Link to = '/'>
            <h1>Home</h1>
          </Link>
        </div>
        <div className="right-side-nav">
            <ul>
              { !user ? (
                <Link 
                  style={{
                  textDecoration: 'none', 
                  color: 'white', 
                  marginRight: '15px'
                  }} 
                to="/sign-up">
                <li>Sign Up</li>
              </Link>
              ):(
                <Link 
                  to='/profile'
                  style={{
                    textDecoration: 'none', 
                    color: 'white', 
                    marginRight: '15px'
                    }}>
                  <li>{user.username}</li>
                </Link>
              )}
              { !user ? (
                <Link to='/sign-in'
                style={{
                  textDecoration: 'none', 
                  color: 'white', 
                  marginRight: '15px'
                  }} >
                <li>Login</li>
              </Link>
              ):(
                <Link to='/sign-in'
                  style={{
                    textDecoration: 'none', 
                    color: 'white', 
                    marginRight: '15px'
                    }} 
                  onClick={handleUserLogout}>
                  <li>Logout</li>
                </Link>
              )}
            </ul>
        </div>
    </nav>
  )
}

export default Nav
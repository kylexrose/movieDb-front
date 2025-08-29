import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Nav from './components/Nav/Nav'
import Home from "./components/Home/Home";
import SignUp from './components/SignUp/SignUp'
import Login from './components/Login/Login'
import PrivateRoute from "./components/PrivateRoute";
import MovieDetail from "./components/MovieDetail/MovieDetail";


function MainRouter({user, handleUserLogin, handleUserLogout}) {
  return (
    <BrowserRouter>
        <Nav user = {user} handleUserLogout={handleUserLogout}/>
        <Routes>
            <Route path="/" element={
              <PrivateRoute>
                <Home/>
              </PrivateRoute>}/>
            <Route 
              path="/sign-up" 
              element={!user ? 
                <SignUp/> : 
                <Navigate to='/'/> }/>
            <Route 
              path="/sign-in" 
              element={!user ? 
                <Login handleUserLogin = {handleUserLogin}/> : 
                <Navigate to='/'/>}/>
            <Route
              path= "/movie-detail/:id" 
              element = {
                <PrivateRoute>
                  <MovieDetail/>
                </PrivateRoute> 
              }
              />
        </Routes>
    </BrowserRouter>
  )
}

export default MainRouter

// make an axios call to login and console.log the JWT from the response
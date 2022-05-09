import {BrowserRouter as Router,Route,Routes }  from "react-router-dom"
import Main from "../pages/Main"
import Login from "../pages/Login"
import Register from "../pages/Register"
import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import MovieDetail from "../pages/MovieDetail"
import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"
import {Outlet,useLocation,Navigate} from "react-router-dom"

const AppRouter = () => {
  const {currentUser}= useContext(AuthContext);
  function PrivateRouter() {
    let location = useLocation() ;
    if (!currentUser) {
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <Outlet/>;
  }
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            {/* <Route path="/details/:id" element={currentUser ? <MovieDetail/> : <Login/>}/> */}
            <Route element={<PrivateRouter/>}>
              <Route path="/details/:id" element={<MovieDetail/>}/>
            </Route>

        </Routes>
        <Footer/>
    </Router>
  )
}

export default AppRouter
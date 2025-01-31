import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Site from './Components/Site/Site'
import AddCountry from './Components/AddCountry'
import Visa from './Components/Second/Visa'
import Navbar from './Components/Site/Navbar'
import Footer from './Components/Site/Footer'
import CountryDeatiles from './Components/CountryDeatiles'
import Study from './Components/Second/Study'
import Job from './Components/Second/Job'
import Register from './Components/Authentication/Regester'
import Login from './Components/Authentication/Login'
import Refrals from './Components/Payment&refrel/Refrals'
import AdminLogin from './Components/Admin/Adminlogin'
import AdminDashboard from './Components/Admin/Admin'
import UserProfile from './Components/Authentication/Userprofile'
import Addnews from './Components/Addnews'
import AdminRegister from './Components/Admin/Adminregester'

const App = () => {
  return (

<div>

<BrowserRouter>
<Navbar/>
<Routes>
R
  <Route path='/' Component={Site}/>
  <Route path='/addcountry' Component={AddCountry}/>
  <Route path='/addnews' Component={Addnews}/>
  <Route path='/adminregester' Component={AdminRegister}/>
  <Route path='/visiting-visa' Component={Visa}/>
  <Route path='/study' Component={Study}/>
  <Route path='/job' Component={Job}/>
  <Route path='/regester' Component={Register}/>
  <Route path='/login' Component={Login}/>
  <Route path='/country-deatiles/:id' Component={CountryDeatiles}/>
  <Route path='/refrel' Component={Refrals}/>
  <Route path='/adminlogin' Component={AdminLogin}/>
  <Route path='/admin' Component={AdminDashboard}/>
  <Route path='/user' Component={UserProfile}/>
  


</Routes>
<Footer/>
</BrowserRouter>


</div>  )
}

export default App
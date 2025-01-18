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

const App = () => {
  return (

<div>

<BrowserRouter>
<Navbar/>
<Routes>

  <Route path='/' Component={Site}/>
  <Route path='/addcountry' Component={AddCountry}/>
  <Route path='/visiting-visa' Component={Visa}/>
  <Route path='/study' Component={Study}/>
  <Route path='/job' Component={Job}/>
  <Route path='/regester' Component={Register}/>
  <Route path='/login' Component={Login}/>
  <Route path='/country-deatiles/:id' Component={CountryDeatiles}/>
  <Route path='/refrel' Component={Refrals}/>


</Routes>
<Footer/>
</BrowserRouter>


</div>  )
}

export default App
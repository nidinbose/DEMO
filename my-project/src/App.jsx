import React from 'react'
import Home from './Components/Site/Home'
import Cards from './Components/Site/Cards'
import JobConsultancy from './Components/Site/JobConsultancy'
import VisitingVisa from './Components/Site/VisitingVisa'
import Studyabroad from './Components/Studyabroad'
import Service from './Components/Site/Service'
import Navbar from './Components/Site/Navbar'
import Footer from './Components/Site/Footer'
import Consultant from './Components/Site/Consaltant'
import HappyClients from './Components/Site/HappyClients'

const App = () => {
  return (
    <div className='lg:pb-[45vh] xl:pb-4'>

<Navbar/>
      <Home/>
      <Cards/>
      <Service/>
      <JobConsultancy/>
      <VisitingVisa/>
      <Studyabroad/>
      <Consultant/>
      <HappyClients/>
      <Footer/>

    </div>
  )
}

export default App
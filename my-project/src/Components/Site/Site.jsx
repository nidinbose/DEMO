import React from 'react'
import Home from './Home'
import Cards from './Cards'
import Navbar from './Navbar'
import Service from './Service'
import JobConsultancy from './JobConsultancy'
import VisitingVisa from './VisitingVisa'
import Studyabroad from '../Studyabroad'
import Consultant from './Consaltant'
import HappyClients from './HappyClients'
import Footer from './Footer'
import Why from '../Why'

const Site = () => {
  return (
    <div className=''>

       
        
          <Home/>
          <Cards/>
          <Service/>
          <JobConsultancy/>
          <VisitingVisa/>
          <Studyabroad/>
          <Why/>
          <Consultant/>
          <HappyClients/>
        
       
        </div>
  )
}

export default Site
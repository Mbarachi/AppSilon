import React from 'react'
import DisbursementCard from '../disbursement-card/DisbursementCard'
import HeroSection from '../hero-section/HeroSection'
import './main-section.scss'

const MainSection = () => {
  return (
    <div className='main'>
        <HeroSection/>
        <DisbursementCard/>
    </div>
  )
}

export default MainSection
import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src="/videos/golf_course_1.mp4" autoPlay loop muted />
        <h1>WELCOME BACK TO THE KPC</h1>
        <p>It's the most wonderful time of the year...</p>
    </div>
  )
}

export default HeroSection
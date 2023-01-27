import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src="/videos/golf_course_1.mov" autoPlay loop muted />
        <h1>WELCOME BACK TO THE KPC</h1>
        <p>It's the most wonderful time of the year...</p>
        <div className="hero-btns">
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                REGISTER
            </Button>
        </div>
    </div>
  )
}

export default HeroSection
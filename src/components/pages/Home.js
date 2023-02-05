import React from 'react';
import '../../App.css'
import './Home.css'

function Home () {
    return (
        <>
        <div className='Home-container'>
            <video src="/videos/golf_course_1.mp4" autoPlay loop muted />
            <h1>WELCOME BACK TO THE KPC!</h1>
            <p>It's the most wonderful time of the year...</p>
        </div>
        </>
    );
}

export default Home;
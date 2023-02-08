import React from 'react';
import '../../App.css'
import './TripRegister.css'

function TripRegister (props) {
    return (
        <>
        <div className='trip-register-container'>
            <h1>REGISTER FOR KPC {props.nextTrip.attributes.number}</h1>
            <h3>Check off each night, meal, and round that you will attend, then click Submit.</h3>
        </div>
        </>
    );
}

export default TripRegister;
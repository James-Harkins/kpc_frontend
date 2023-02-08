import React from 'react';
import '../../App.css'
import CalendarDate from '../CalendarDate';
import './TripRegister.css'

function TripRegister (props) {
    const tripCalendar = props.nextTrip.attributes.calendar
    console.log(tripCalendar) 
    return (
        <>
        <div className='trip-register-container'>
            <h1>REGISTER FOR KPC {props.nextTrip.attributes.number}</h1>
            <h3>Check off each night, round, and meal for which you will be in attendance, then click Submit.</h3>
            <ul className='calendar-days-list'>
                {tripCalendar.map((day) =>
                    <li key={day.date}>
                        <CalendarDate day={day}/>
                    </li>
                )}
            </ul>
        </div>
        </>
    );
}

export default TripRegister;
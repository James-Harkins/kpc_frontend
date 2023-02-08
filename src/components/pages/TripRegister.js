import React from 'react';
import '../../App.css'
import './TripRegister.css'

function TripRegister (props) {
    const tripCalendar = props.nextTrip.attributes.calendar
    
    const listCalendarDays = tripCalendar.map((day) =>
        <li key={day.date}>
            {day.date}
        </li>
    )
    
    return (
        <>
        <div className='trip-register-container'>
            <h1>REGISTER FOR KPC {props.nextTrip.attributes.number}</h1>
            <h3>Check off each night, round, and meal for which you will be in attendance, then click Submit.</h3>
            <ul className='calendar-days-list'>
                {listCalendarDays}
            </ul>
        </div>
        </>
    );
}

export default TripRegister;
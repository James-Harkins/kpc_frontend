import React, { useState } from 'react';
import '../../App.css'
import CalendarDate from '../CalendarDate';
import './TripRegister.css'
import axios from 'axios'
import { withRouter } from '../../components/withRouter';

function TripRegister (props) {
    const golfer_id = props.golfer.id

    const trip_id = props.nextTrip.id

    const tripCalendar = props.nextTrip.attributes.calendar

    const url = `http://localhost:3001/api/v1/golfers/${golfer_id}/golfer_trips?api_key=${process.env.REACT_APP_API_KEY}`
    
    const [nights, setNights] = useState([])

    const [meals, setMeals] = useState([])
    
    const [courses, setCourses] = useState([])

    const updateNights = (id) => {
        if(nights.indexOf(id) > -1) {
            setNights(prev_id => prev_id !== id)
        } else {
            setNights([...nights, id])
        }
    }

    const updateMeals = (id) => {
        if(meals.includes(id)) {
            setMeals(prev_id => prev_id !== id)
        } else {
            setMeals([...meals, id])
        }
    }

    const updateCourses = (id) => {
        if(courses.includes(id)) {
            setCourses(prev_id => prev_id !== id)
        } else {
            setCourses([...courses, id])
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        
        let golfer_trip = {
          golfer_id: golfer_id,
          trip_id: trip_id,
          nights: nights,
          meals: meals,
          courses: courses
        }
        
        axios.post(url, {golfer_trip}, {withCredentials: true})
            .then(response => {
            if(response.data.data.id) {
                props.navigate('/trips');
            }
          }
        ) .catch(error => console.log('api errors:', error))
      }
    
    return (
        <>
        <div className='trip-register-container'>
            <h1>REGISTER FOR KPC {props.nextTrip.attributes.number}</h1>
            <h3>Check off each night, round, and meal for which you will be in attendance, then click Submit.</h3>
            <form className='trip-register-form' onSubmit={handleSubmit}>
                <ul className='calendar-days-list'>
                    {tripCalendar.map((day) =>
                        <li key={day.date}>
                            <CalendarDate 
                                day={day} 
                                updateNights={updateNights} 
                                updateMeals={updateMeals} 
                                updateCourses={updateCourses}
                            />
                        </li>
                    )}
                </ul>
                <button className="trip-register-submit-button" type="submit">Submit</button>
            </form>
        </div>
        </>
    );
}

export default withRouter(TripRegister);
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

    const addToNights = id => {
        const updatedNights = [...nights];
        updatedNights.push(id);
        setNights(updatedNights);
      };
    
      const removeFromNights = id => {
        const updatedNights = nights.filter(nightId => nightId !== id);
        setNights(updatedNights);
      };

    const addToMeals = id => {
        const updatedMeals = [...meals];
        updatedMeals.push(id);
        setMeals(updatedMeals);
      };

    const removeFromMeals = id => {
        const updatedMeals = meals.filter(mealId => mealId !== id);
        setMeals(updatedMeals);
      };

    const addToCourses = id => {
    const updatedCourses = [...courses];
    updatedCourses.push(id);
    setCourses(updatedCourses);
    };

    const removeFromCourses = id => {
        const updatedCourses = courses.filter(courseId => courseId !== id);
        setCourses(updatedCourses);
      };

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
                props.refreshGolfer();
                props.navigate('/trips');
            }
          }
        ) .catch(error => console.log('api errors:', error))
      }
    
    return (
        <>
        <div className='trip-register-container'>
            <h1>REGISTER FOR KPC {props.nextTrip.attributes.number}</h1>
            <h4>Check off each night, round, and meal for which you will be in attendance, then click Submit.</h4>
            <form className='trip-register-form' onSubmit={handleSubmit}>
                <ul className='calendar-days-list'>
                    {tripCalendar.map((day) =>
                        <li key={day.date}>
                            <CalendarDate 
                                day={day} 
                                addToNights={addToNights}
                                removeFromNights={removeFromNights}
                                addToMeals={addToMeals}
                                removeFromMeals={removeFromMeals}
                                addToCourses={addToCourses}
                                removeFromCourses={removeFromCourses}
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
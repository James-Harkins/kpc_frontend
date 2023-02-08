import React from 'react';
import CalendarDateCourse from './CalendarDateCourse';
import CalendarDateMeals from './CalendarDateMeals';
import CalendarDateNight from './CalendarDateNight';

function CalendarDate(props) {

  return (
    <>
        <div className='trip-register-form-container'>
            <h2>{props.day.date}</h2>
            <div className='trip-register-form-container-list'>
                <CalendarDateNight 
                    night={props.day.night} 
                    addToNights={props.addToNights}
                    removeFromNights={props.removeFromNights}
                />
                <CalendarDateCourse course={props.day.course} 
                    addToCourses={props.addToCourses}
                    removeFromCourses={props.removeFromCourses}
                />
                <CalendarDateMeals meals={props.day.meals} 
                    addToMeals={props.addToMeals}
                    removeFromMeals={props.removeFromMeals}
                />        
            </div>
        </div>
    </>
  );
}

export default CalendarDate;

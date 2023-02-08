import React from 'react';
import CalendarDateCourse from './CalendarDateCourse';
import CalendarDateMeals from './CalendarDateMeals';
import CalendarDateNight from './CalendarDateNight';

function CalendarDate(props) {

  return (
    <>
        <h2>{props.day.date}</h2>
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
    </>
  );
}

export default CalendarDate;

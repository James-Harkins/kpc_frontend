import React from 'react';
import CalendarDateCourse from './CalendarDateCourse';
import CalendarDateMeals from './CalendarDateMeals';
import CalendarDateNight from './CalendarDateNight';

function CalendarDate(props) {

  return (
    <>
        <h5>{props.day.date}</h5>
        <CalendarDateNight night={props.day.night}/>
        <CalendarDateCourse course={props.day.course}/>
        <CalendarDateMeals meals={props.day.meals}/>        
    </>
  );
}

export default CalendarDate;

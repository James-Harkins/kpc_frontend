import React from 'react';
import CalendarDateCourse from './CalendarDateCourse';
import CalendarDateMeals from './CalendarDateMeals';
import CalendarDateNight from './CalendarDateNight';

function CalendarDate(props) {

  return (
    <>
        <h2>{props.day.date}</h2>
        <CalendarDateNight night={props.day.night} updateNights={props.updateNights}/>
        <CalendarDateCourse course={props.day.course} updateCourses={props.updateCourses}/>
        <CalendarDateMeals meals={props.day.meals} updateMeals={props.updateMeals}/>        
    </>
  );
}

export default CalendarDate;

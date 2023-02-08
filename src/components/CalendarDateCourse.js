import React from 'react';

function CalendarDateCourse(props) {

  return (
    <>
    {
        Object.keys(props.course).includes('cost') ? 
        <>
            <h5>Course: {props.course.name}</h5>
            <h5>Cost: ${props.course.cost}</h5>    
        </>
        :
        null
    }
    </>
  );
}

export default CalendarDateCourse;

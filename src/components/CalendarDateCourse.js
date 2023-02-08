import React from 'react';

function CalendarDateCourse(props) {

  return (
    <>
    {
        Object.keys(props.course).includes('cost') ? 
        <>
            <input type='checkbox'/>
            <label>Course: ${props.course.cost}</label>
        </>
        :
        null
    }
    </>
  );
}

export default CalendarDateCourse;

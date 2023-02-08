import React from 'react';
import CourseCheckbox from './CourseCheckbox';

function CalendarDateCourse(props) {
  const id = props.course.id 
  const label = `Golf: $${props.course.cost}`

  return (
    <>
    {
        Object.keys(props.course).includes('cost') ? 
        <>
            <CourseCheckbox 
                id={id}
                label={label}
                addToCourses={props.addToCourses}
                removeFromCourses={props.removeFromCourses}
            />
        </>
        :
        null
    }
    </>
  );
}

export default CalendarDateCourse;

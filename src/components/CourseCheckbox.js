import React, { useState } from 'react';

function CourseCheckbox(props) {
    const [checked, setChecked] = useState(false);

    const courseId = props.id;
    const courseLabel = props.label;

    const addToCourses = props.addToCourses;
    const removeFromCourses = props.removeFromCourses;

    const handleChange = id => {
        checked ? removeFromCourses(id) : addToCourses(id)
        setChecked(!checked);
    }

    return (
        <>
          <label htmlFor={courseId} >
            <input type="checkbox"
                   name="category-input"
                   id={courseId}
                   onChange={() => handleChange(courseId)}
            />
            {courseLabel}
        </label>  
        </>
    );
}

export default CourseCheckbox;

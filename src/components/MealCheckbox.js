import React, { useState } from 'react';

function MealCheckbox(props) {
    const [checked, setChecked] = useState(false);

    const mealId = props.id;
    const mealLabel = props.label;

    const addToMeals = props.addToMeals;
    const removeFromMeals = props.removeFromMeals;

    const handleChange = id => {
        checked ? removeFromMeals(id) : addToMeals(id)
        setChecked(!checked);
    }

    return (
        <>
            <label htmlFor={mealId} >
            <input type="checkbox"
                   name="category-input"
                   id={mealId}
                   onChange={() => handleChange(mealId)}
            />
            {mealLabel}
        </label>
        </>
    );
}

export default MealCheckbox;

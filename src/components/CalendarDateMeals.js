import React from 'react';
import MealCheckbox from './MealCheckbox';

function CalendarDateMeals(props) {
  const meals = props.meals

  const listMeals = meals.map((meal) => 
    <>
        <MealCheckbox 
            id={meal.id}
            label={`${meal.time_of_day}: $${meal.cost}`}
            addToMeals={props.addToMeals}
            removeFromMeals={props.removeFromMeals}
        />
    </>
  )

  return (
    <>
        {listMeals}
    </>
  );
}

export default CalendarDateMeals;

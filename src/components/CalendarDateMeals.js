import React from 'react';

function CalendarDateMeals(props) {
  const meals = props.meals

  const listMeals = meals.map((meal) => 
    <>
      <input type='checkbox'/>
      <label>{meal.time_of_day}: ${meal.cost}</label>
    </>
  )

  return (
    <>
        {listMeals}
    </>
  );
}

export default CalendarDateMeals;

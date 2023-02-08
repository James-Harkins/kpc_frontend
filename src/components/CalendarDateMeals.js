import React from 'react';

function CalendarDateMeals(props) {
  const meals = props.meals

  const listMeals = meals.map((meal) => 
    <>
      <h5>{meal.time_of_day}: ${meal.cost}</h5>
    </>
  )

  return (
    <>
        {listMeals}
    </>
  );
}

export default CalendarDateMeals;

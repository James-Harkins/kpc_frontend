import React from 'react';

function CalendarDateNight(props) {

  return (
    <>
    {   
        Object.keys(props.night).includes('cost') ?
        <>
            <input type='checkbox'/>  
            <label>Stay at House: ${props.night.cost}</label>
        </>
        :
        null         
    }
    </>
  );
}

export default CalendarDateNight;

import React from 'react';

function CalendarDateNight(props) {

  return (
    <>
    {   
        Object.keys(props.night).includes('cost') ?
        <h5>House Cost: ${props.night.cost}</h5>
        :
        null         
    }
    </>
  );
}

export default CalendarDateNight;

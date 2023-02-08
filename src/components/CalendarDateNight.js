import React from 'react';
import NightCheckbox from './NightCheckbox';

function CalendarDateNight(props) {
  const id = props.night.id 
  const label = `Stay at House: $${props.night.cost}`

  return (
    <>
    {   
        Object.keys(props.night).includes('cost') ?
        <>
            <NightCheckbox 
                id={id}
                label={label}
                addToNights={props.addToNights}
                removeFromNights={props.removeFromNights}
            />
        </>
        :
        null         
    }
    </>
  );
}

export default CalendarDateNight;

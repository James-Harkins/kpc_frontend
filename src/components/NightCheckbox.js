import React, { useState } from 'react';

function NightCheckbox(props) {
    const [checked, setChecked] = useState(false);

    const nightId = props.id;
    const nightLabel = props.label;

    const addToNights = props.addToNights;
    const removeFromNights = props.removeFromNights;

    const handleChange = id => {
        checked ? removeFromNights(id) : addToNights(id)
        setChecked(!checked);
    }

    return (
        <>
            <label htmlFor={nightId} >
            <input type="checkbox"
                   name="category-input"
                   id={nightId}
                   onChange={() => handleChange(nightId)}
            />
            {nightLabel}
        </label>
        </>
    );
}

export default NightCheckbox;

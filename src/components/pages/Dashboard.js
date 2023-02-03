import React from 'react'
import '../../App.css'

function Dashboard (props) {
    return (
        <>
        <div>
            <h1>Welcome back, {props.golfer.attributes.first_name}!</h1>
        </div>
        </>
    );
}

export default Dashboard;
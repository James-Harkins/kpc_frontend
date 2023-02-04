import React from 'react'
import '../../App.css'

function Dashboard (props) {
    const trips = [props.golfer.attributes.golfer_trips.data[0]]
    return (
        <>
        <div>
            <h1>Welcome back, {props.golfer.attributes.first_name}!</h1>
        </div>
        </>
    );
}

export default Dashboard;
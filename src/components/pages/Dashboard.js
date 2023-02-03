import React from 'react'
import '../../App.css'

function Dashboard (props) {
    const trips = [props.golfer.attributes.golfer_trips.data[0]]
    debugger;
    return (
        <>
        <div>
            <h1>Welcome back, {props.golfer.attributes.first_name}!</h1>
            <div>
                {trips.map(trip => {
                    return (
                    <div key={trip.id}>
                        <h3>KPC {trip.trip_number}</h3>
                        <h3>Total Cost: ${trip.total_cost}</h3>
                        <hr />
                    </div>
                    );
                })}    
            </div>
        </div>
        </>
    );
}

export default Dashboard;
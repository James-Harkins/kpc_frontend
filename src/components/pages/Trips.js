import React from 'react'
import '../../App.css'
import TripBlock from '../TripBlock'
import './Trips.css'

function Trips (props) {
    const trips = [props.golfer.attributes.golfer_trips.data[0]]

    const listTrips = trips.map((trip) =>
      <TripBlock id={trip.id} tripNumber={trip.trip_number} totalCost={trip.total_cost}/>
    );
    
    return ( 
        <div className='trips'>
          <h1>Welcome back, {props.golfer.attributes.first_name}!</h1>
            <ul className='trips__blocks'>
            {listTrips}
            </ul>
        </div>
    );
}

export default Trips;
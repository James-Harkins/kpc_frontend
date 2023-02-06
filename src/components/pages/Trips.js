import React from 'react'
import '../../App.css'
import TripBlock from '../TripBlock'
import './Trips.css'
import { Link } from 'react-router-dom'

function Trips (props) {
    const trips = [props.golfer.attributes.golfer_trips.data[0]]

    const listTrips = trips.map((trip) =>
        <li className='trip__block' key={trip.id}>
          <TripBlock id={trip.id} tripNumber={trip.trip_number} totalCost={trip.total_cost} tripYear={trip.trip_year}/>
        </li>
    );
    
    return ( 
        <div className='trips'>
          <h1>Welcome back, {props.golfer.attributes.first_name}!</h1>
          {props.golferIsRegistered ? props.golferIsRegistered :
          <Link to='/register_next_trip' className='nextTripLink'>
            Click here to register for the next KPC!
          </Link>}
            <div className='trips__container'>
            <h3>Your Trip History:</h3>
              <div className='trips__wrapper'>
              <ul className='trip__blocks'>
                {listTrips}
              </ul>
              </div>
            </div>
        </div>
    );
}

export default Trips;
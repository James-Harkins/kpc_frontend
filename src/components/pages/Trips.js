import React from 'react'
import '../../App.css'
import TripBlock from '../TripBlock'
import './Trips.css'
import { Link } from 'react-router-dom'

function Trips (props) {
    const trips = props.golfer.attributes.golfer_trips.data
    
    const listTrips = trips.map((trip) =>
        <li className='trip__block' key={trip.id}>
          <TripBlock id={trip.id} tripNumber={trip.trip_number} totalCost={trip.total_cost} tripYear={trip.trip_year}/>
        </li>
    );
    
    return ( 
        <div className='trips'>
          <h1>Welcome back, {props.golfer.attributes.first_name}!</h1>
          {
            props.golfer.attributes.is_registered_for_next_trip ?
            <h3>See you at KPC {props.nextTrip.attributes.number}!</h3>
            :
            <Link to='/register_next_trip' className='next-trip-link'>
                Register for KPC {props.nextTrip.attributes.number} 
            </Link>
          }
            <div className='trips__container'>
              <div className='trips__wrapper'>
                {trips.length > 0 ? 
                <>
                  <h3>Your Trip History:</h3>
                  <ul className='trip__blocks'>
                    {listTrips}
                  </ul>
                </>
                : 
                <h3>You have not atteneded a KPC yet.</h3>}
              </div>
            </div>
        </div>
    );
}

export default Trips;
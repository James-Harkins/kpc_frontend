import React from 'react'
import '../../App.css'
import TripBlock from '../TripBlock'
import './Trips.css'
import { Link } from 'react-router-dom'

function Trips (props) {
    const trips = props.golfer.attributes.golfer_trips.data
    console.log(props.nextTrip)
    const listTrips = trips.map((trip) =>
        <li className='trip__block' key={trip.id}>
          <TripBlock id={trip.id} tripNumber={trip.trip_number} totalCost={trip.total_cost} tripYear={trip.trip_year}/>
        </li>
    );

    const romanize = (num) => {
        if (isNaN(num))
          return NaN;
        var digits = String(+num).split(""),
          key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
                 "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
                 "","I","II","III","IV","V","VI","VII","VIII","IX"],
          roman = "",
            i = 3;
        while (i--)
          roman = (key[+digits.pop() + (i * 10)] || "") + roman;
        return Array(+digits.join("") + 1).join("M") + roman;
        }
    
    return ( 
        <div className='trips'>
          <h1>Welcome back, {props.golfer.attributes.first_name}!</h1>
          <Link to='/register_next_trip' className='next-trip-link'>
            Register for KPC {romanize(props.nextTrip.attributes.number)} 
          </Link>
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
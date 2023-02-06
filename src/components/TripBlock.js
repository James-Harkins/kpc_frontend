import React from 'react';

function TripBlock(props) {
  return (
    <>
      <li className='trip__block' key={props.id}>
        <div className='trip__block__div'>
          <h3>KPC {props.tripNumber}</h3>
          <figure className='trip__block__pic-wrap'>
            <img
              className='trip__block__img'
              alt='Trip Image'
              src={`../../public/images/tripPhotos/${props.tripNumber}.jpeg`}
            />
          </figure>
          <div className='trip__block__info'>
            <h5 className='trip__block__text'>Total Cost: ${props.totalCost}</h5>
          </div>
        </div>
      </li>
    </>
  );
}

export default TripBlock;

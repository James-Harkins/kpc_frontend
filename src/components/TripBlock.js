import React from 'react';

function TripBlock(props) {

  return (
    <>
        <div className='trip__block__div'>
          <figure className='trip__block__pic-wrap'>
            <img
              className='trip__block__img'
              alt='Trip Image'
              src={`/images/tripPhotos/${props.tripNumber}.jpeg`}
            />
          </figure>
          <div className='trip__block__info'>
            <h5 className='trip__block__text'>KPC {props.tripNumber}</h5>
            <h5 className='trip__block__text'>{props.tripYear}</h5>
            <h5 className='trip__block__text'>Total Cost:</h5>
            <h5 className='trip__block__text'>${props.totalCost}</h5>
          </div>
        </div>
    </>
  );
}

export default TripBlock;

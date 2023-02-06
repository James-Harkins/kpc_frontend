import React from 'react';

function TripBlock(props) {

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
            <h5 className='trip__block__text'>KPC {romanize(props.tripNumber)}</h5>
            <h5 className='trip__block__text'>{props.tripYear}</h5>
            <h5 className='trip__block__text'>Total Cost: ${props.totalCost}</h5>
          </div>
        </div>
    </>
  );
}

export default TripBlock;

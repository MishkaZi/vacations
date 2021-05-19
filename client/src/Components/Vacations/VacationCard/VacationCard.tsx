import React from 'react';
import './VacationCard.css';

const VacationCard = ({ vacation }: any): JSX.Element => {
  // const func = () => {
  //   console.log('hello');
  //   return 'hello';
  // };
  return (
    <div className='vacation-card'>
      <div>
        <div className="button-image">
          <img src={vacation.image} alt='' />
          <button
            onClick={(event) => {
              console.log(event);
              
            }}
          >
            <img
              id='follow'
              src='https://img-premium.flaticon.com/png/512/3893/3893183.png?token=exp=1621331436~hmac=31fcc596176be24638f0be0e3a0bdf73'
              width='50'
              height='50'
              
              alt=''
            />
          </button>

        </div>
        <p>
          <b>Description: </b>
          {vacation.description}
        </p>
      </div>
      <div>
        <p>
          <b>Departure and arrival dates: </b>
          {vacation.departure_date} - {vacation.arrival_date}
        </p>
        <p>
          <b>Price: </b>
          {vacation.price}
        </p>
      </div>
    </div>
  );
};

export default VacationCard;

import React from 'react';
import './VacationCard.css';

const VacationCard = ({ vacation }: any): JSX.Element => {

  return (
    <div className='vacation-card'>
      <div>
        <img src={vacation.image} alt='' />
        <p>
          <b>Destination: </b>
          {vacation.destination}
        </p>
        <p>
          <b>Description: </b>
          {vacation.description}
        </p>
      </div>
      <div className='bottom-vacation-card'>
        <div className='dates-price'>
          <p>
            <b>Departure and arrival dates: </b>
            {vacation.departure_date} - {vacation.arrival_date}
          </p>
          <p>
            <b>Price: </b>
            {vacation.price}
          </p>
        </div>

        {vacation.num_of_followers}
        
        <button
          onClick={(event) => {
            console.log(event);
          }}
        >
          <img
            id='follow'
            src='../../../followed.png'
            width='50'
            height='50'
            alt=''
          />
        </button>
      </div>
    </div>
  );
};

export default VacationCard;

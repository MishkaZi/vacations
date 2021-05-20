import React from 'react';
import './VacationCardAdmin.css';

const VacationCard = ({ vacation }: any): JSX.Element => {
  // const func = () => {
  //   console.log('hello');
  //   return 'hello';
  // };
  return (
    <div className='vacation-card'>
      <div>
        <img src={vacation.image} alt='' />
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

        <button
          onClick={(event) => {
            console.log(event);
          }}
        >
          <i className='fas fa-trash-alt fa-3x'></i>
        </button>
        <button
          onClick={(event) => {
            console.log(event);
          }}
        >
          <i className='fas fa-edit fa-3x'></i>
        </button>
      </div>
    </div>
  );
};

export default VacationCard;

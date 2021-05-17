import React from 'react';
import { VacationModel } from '../VacationModel';
import './VacationCard.css';

const VacationCard = ({vacation}: any): JSX.Element => {
  return (
    <div className='vacation-card'>
      <p>Image: {vacation.image}</p>
      <p>Description: {vacation.description}</p>
      <p>
        Departure and arrival dates: {vacation.departureDate} -{' '}
        {vacation.arrivalDate}
      </p>
      <p>Price: {vacation.price}</p>
    </div>
  );
};

export default VacationCard;

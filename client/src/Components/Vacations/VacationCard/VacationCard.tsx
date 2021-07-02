import React from 'react';
import { useSelector } from 'react-redux';
import { RootStore } from '../../../store/store';
import './VacationCard.css';

const VacationCard = ({ vacation }: any): JSX.Element => {
  const isAdmin = useSelector((state: RootStore) => state.Auth.isAdmin);
  console.log(isAdmin);

  const followVacation = () => {
    
  }

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
        {/* In case of regular user */}
        {!isAdmin && vacation.num_of_followers}
        {/* Follow button */}
        {!isAdmin && (
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
        )}

        {/* In case of Admin user */}
        {/* Edit vacation button */}
        {isAdmin && (
          <button
            onClick={(event) => {
              console.log(event);
            }}
          >
            <i className='fas fa-edit fa-3x'></i>
          </button>
        )}
        {/* Delete vacation button */}
        {isAdmin && (
          <button
            onClick={(event) => {
              console.log(event);
            }}
          >
            <i className='fas fa-trash-alt fa-3x'></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default VacationCard;

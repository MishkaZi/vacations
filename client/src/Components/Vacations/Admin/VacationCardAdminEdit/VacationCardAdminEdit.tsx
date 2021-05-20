import React from 'react';
import './VacationCardAdminEdit.css';

const VacationCardAdminEdit = ({ vacation }: any): JSX.Element => {
  // const func = () => {
  //   console.log('hello');
  //   return 'hello';
  // };
  return (
    <div className='vacation-card'>
      <div>
        <img src={vacation.image} alt='' />
        <input type="url" defaultValue={vacation.image} />
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
          <i className='fas fa-trash-alt'></i>
        </button>
        <button
          onClick={(event) => {
            console.log(event);
          }}
        >
          <i className='fas fa-edit'></i>
        </button>
      </div>
    </div>
  );
};

export default VacationCardAdminEdit;

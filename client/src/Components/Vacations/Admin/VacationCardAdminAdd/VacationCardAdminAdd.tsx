import React from 'react';
import './VacationCardAdminAdd.css';

const VacationCardAdminAdd = (): JSX.Element => {
  // const func = () => {
  //   console.log('hello');
  //   return 'hello';
  // };

  return (
    <div className='vacation-card'>
      <div className='add-vacation-inputs'>
        <input type='url' placeholder='Image URL: ' />
        <input type='text' placeholder='Description: ' />
        <input type='text' placeholder='Daparture date: ' />
        <input type='text' placeholder='Arrival date: ' />
        <input type='number' placeholder='Price: ' />
      </div>

      <button
        onClick={(event) => {
          console.log(event);
        }}
      >
        <i className='fas fa-edit'></i>
      </button>
    </div>
  );
};

export default VacationCardAdminAdd;

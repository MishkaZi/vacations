import React from 'react';
import VacationCardAdmin from '../VacationCardAdmin/VacationCardAdmin';
import { VacationModel } from '../../VacationModel';

import './VacationCardListAdmin.css';
import VacationCardAdminAdd from '../VacationCardAdminAdd/VacationCardAdminAdd';

const VacationCardListAdmin = ({ vacations }: any): JSX.Element => {
  return (
    <div className='vacation-card-list'>
      <button
        className='add-button'
        onClick={() => {
          <VacationCardAdminAdd />;
        }}
      >
        <i className='fas fa-plus-square fa-4x'></i>
      </button>
      {vacations?.map((vacation: VacationModel, index: number) => {
        return <VacationCardAdmin key={index} vacation={vacation} />;
      })}
    </div>
  );
};

export default VacationCardListAdmin;

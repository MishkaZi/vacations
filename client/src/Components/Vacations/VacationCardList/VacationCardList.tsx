import React from 'react';
import { useHistory } from 'react-router-dom';
import VacationCard from '../VacationCard/VacationCard';
import { VacationModel } from '../VacationModel';

import './VacationCardList.css';

const VacationCardList = ({ vacations }: any): JSX.Element => {
  const history = useHistory();

  return (
    <div className='vacation-card-list'>
      <button
        className='add-button'
        onClick={() => {
          history.push('/add-vacation');
        }}
      >
        <i className='fas fa-plus-square fa-4x'></i>
      </button>
      {vacations?.map((vacation: VacationModel, index: number) => {
        return <VacationCard key={index} vacation={vacation} />;
      })}
    </div>
  );
};

export default VacationCardList;

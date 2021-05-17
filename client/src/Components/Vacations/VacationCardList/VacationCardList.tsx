import React from 'react';
import VacationCard from '../VacationCard/VacationCard';
import { VacationModel } from '../VacationModel';
// import VacationCard from '../VacationCard/VacationCard';
// import { VacationModel } from '../VacationModel';
// import { VacationModel } from '../VacationModel';
import './VacationCardList.css';

const VacationCardList = ({ vacations }: any): JSX.Element => {
  return (
    <div className='vacation-card-list'>
      {vacations?.map((vacation: VacationModel, index: number) => {
        return <VacationCard key={index} vacation={vacation} />;
      })}
    </div>
  );
};

export default VacationCardList;

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

import VacationCard from '../VacationCard/VacationCard';
import { VacationModel } from '../VacationModel';
import Axios from 'axios';

import { RootStore } from '../../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { getVacations } from '../../Vacations/redux/actions';

import './VacationCardList.css';

const VacationCardList = (): JSX.Element => {
  const dispatch = useDispatch();

  const getVacationsFromDB = async () => {
    let token = sessionStorage.getItem('userToken');

    try {
      const vacations = await Axios.get('http://localhost:3001/vacations/', {
        headers: { Authorization: token },
      });

      dispatch(getVacations(vacations.data));
    } catch (error) {
      return new Error(error);
    }
  };

  useEffect(() => {
    getVacationsFromDB();
  }, []);

  //Type should be changed
  const vacations: any = useSelector(
    (state: RootStore) => state.Vacations.vacations
  );

  return (
    <div className='vacation-card-list'>
      {vacations?.map((vacation: VacationModel, index: number) => {
        return <VacationCard key={index} vacation={vacation} />;
      })}
    </div>
  );
};

export default VacationCardList;

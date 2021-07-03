import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../../store/store';
import './VacationCard.css';
import { VacationModel } from '../VacationModel';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import { updateVacation, getVacations } from '../redux/actions';

const VacationCard = (vacation: VacationModel): JSX.Element => {
  const dispatch = useDispatch();
  const history = useHistory();

  const isAdmin = useSelector((state: RootStore) => state.Auth.isAdmin);
  const vacations: any = useSelector(
    (state: RootStore) => state.Vacations.vacations
  );

  const [isFollowed, setIsFollowed] = useState(false);

  // if (vacation.userId !== null) {
  //   setIsFollowed(true);
  // } else {
  //   setIsFollowed(false);
  // }

  const [error, setError] = useState<string>();

  const followVacation = async (vacation: VacationModel) => {
    // let token = sessionStorage.getItem('userToken');

    //Updating number of followers for this vacation
    // const updatedVacation = { ...vacation };
    // if (!isFollowed) {
    //   updatedVacation.numOfFollowers++;
    // } else {
    //   updatedVacation.numOfFollowers--;
    // }
    // try {
    //   await Axios.put(
    //     'http://localhost:3001/vacations/' + vacation.vacationId,
    //     updatedVacation
    //   );
    //   const id = vacation.vacationId;
    //   const filteredVacations = vacations.map((vacation: VacationModel) => {
    //     if (vacation.vacationId === id) {
    //       vacation.numOfFollowers++;
    //     }
    //     return vacation;
    //   });

    //   dispatch(getVacations(filteredVacations));
    // } catch (error) {
    //   return new Error(error);
    // }

    if (isFollowed) {
      setIsFollowed(false);
    } else {
      console.log(false);

      setIsFollowed(true);
    }
  };

  const editVacation = (vacationToUpdate: VacationModel) => {
    dispatch(updateVacation(vacationToUpdate));
    history.push('/edit-vacation');
  };

  const deleteVacationFunction = async (vacationId: number) => {
    try {
      await Axios.delete('http://localhost:3001/vacations/' + vacationId);

      const filteredVacations = vacations.filter((vacation: VacationModel) => {
        return vacation.vacationId !== vacationId;
      });

      dispatch(getVacations(filteredVacations));
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className='vacation-card'>
      {error && <div className='alert'>{error}</div>}
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
            {vacation.startDate} - {vacation.endDate}
          </p>
          <p>
            <b>Price: </b>
            {vacation.price}
          </p>
        </div>
        {/* In case of regular user */}
        {!isAdmin && vacation.numOfFollowers}
        {/* Follow button */}
        {!isAdmin && (
          <button onClick={() => followVacation(vacation)}>
            {!isFollowed && (
              <img
                id='follow'
                src='../../../followed.png'
                width='50'
                height='50'
                alt=''
              />
            )}
            {isFollowed && (
              <img
                id='follow'
                src='../../../not-followed.png'
                width='50'
                height='50'
                alt=''
              />
            )}
          </button>
        )}

        {/* In case of Admin user */}
        {/* Edit vacation button */}
        {isAdmin && (
          <button onClick={() => editVacation(vacation)}>
            <i className='fas fa-edit fa-3x'></i>
          </button>
        )}
        {/* Delete vacation button */}
        {isAdmin && (
          <button onClick={() => deleteVacationFunction(vacation.vacationId)}>
            <i className='fas fa-trash-alt fa-3x'></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default VacationCard;

import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { VacationModel } from '../../VacationModel';
import './VacationCardAdminEdit.css';
import Axios from 'axios';

const VacationCardAdminEdit = (vacation:VacationModel, vacationId:number): JSX.Element => {
  const history = useHistory();

  const { register, handleSubmit } = useForm<VacationModel>();

  const editVacation = async (updatedVacation: VacationModel) => {

    try {
      const vacationData = await Axios.put(
        `http://localhost:3001/vacations/:${vacationId}`,
        updatedVacation
      );
        console.log(vacationData);
        
      history.push('/home');
    } catch (error) {
      console.log(error);
    }
  };

  const submit = async (data: VacationModel) => {
    editVacation(data);
  };
  
  return (
    <div className='editVacation'>
      <h3>Please update vacation details:</h3>
      <form onSubmit={handleSubmit(submit)}>
        {/* Destination */}
        <div>
          <input
            placeholder='Destination: '
            type='text'
            required
            defaultValue={vacation.destination}
            {...register('destination', {
              required: true,
            })}
          />
        </div>
        {/* Description */}
        <div>
          <input
            placeholder='Description: '
            type='text'
            required
            defaultValue={vacation.description}
            {...register('description', {
              required: true,
            })}
          />
        </div>
        {/* Image URL */}
        <div>
          <input
            placeholder='Image URL: '
            type='url'
            required
            defaultValue={vacation.image}
            {...register('image', {
              required: true,
            })}
          />
        </div>
        {/* Departure date */}
        <div>
          <input
            placeholder='Departure date: '
            type='date'
            required
            defaultValue={vacation.departure_date}
            {...register('departure_date', { required: true })}
          />
        </div>
        {/* Arrival date */}
        <div>
          <input
            placeholder='Arrival date: '
            type='date'
            required
            defaultValue={vacation.arrival_date}
            {...register('arrival_date', { required: true })}
          />
        </div>
        {/* Price */}
        <div>
          <input
            placeholder='Price: '
            type='number'
            required
            defaultValue={vacation.price}
            {...register('price', {
              required: true,
            })}
          />
        </div>
        <button type='submit'>Edit vacation</button>
      </form>

      <Link className='link' to='/home'>
        if you changed your mind
      </Link>
    </div>
  );
};

export default VacationCardAdminEdit;

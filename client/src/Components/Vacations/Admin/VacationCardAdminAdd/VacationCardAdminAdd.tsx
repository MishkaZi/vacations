import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { VacationModel } from '../../VacationModel';
import './VacationCardAdminAdd.css';
import Axios from 'axios';

const VacationCardAdminAdd = (): JSX.Element => {
  const history = useHistory();

  const { register, handleSubmit } = useForm<VacationModel>();

  const addVacation = async (vacation: VacationModel) => {
    try {
      console.log(vacation);
      const vacationData = await Axios.post(
        'http://localhost:3001/vacations/',
        vacation
      );
      console.log(vacationData.data);

      //Register vacation id
      // setVacation(vacationData.data);

      console.log(vacation);

      history.push('/home');
    } catch (error) {
      console.log(error);
    }
  };
  const submit = async (data: VacationModel) => {
    addVacation(data);
  };
  return (
    <div className='addVacation'>
      <h3>Please enter vacation details:</h3>
      <form onSubmit={handleSubmit(submit)}>
        {/* Destination */}
        <div>
          <input
            placeholder='Destination: '
            type='text'
            required
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
            {...register('departure_date', { required: true })}
          />
        </div>
        {/* Arrival date */}
        <div>
          <input
            placeholder='Arrival date: '
            type='date'
            required
            {...register('arrival_date', { required: true })}
          />
        </div>
        {/* Price */}
        <div>
          <input
            placeholder='Price: '
            type='number'
            required
            {...register('price', {
              required: true,
            })}
          />
        </div>
        <button type='submit'>Add vacation</button>
      </form>

      <Link className='link' to='/home'>
        if you changed your mind
      </Link>
    </div>
  );
};

export default VacationCardAdminAdd;

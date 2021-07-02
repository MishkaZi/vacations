import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UsersModel } from '../UsersModel';
import { useForm } from 'react-hook-form';
import './login.css';
import { loginUser } from '../redux/actions';
import { useDispatch } from 'react-redux';
import Axios from 'axios';

export const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UsersModel>();

  const submit = async (user: UsersModel) => {
    try {
      const userData = await Axios.post(
        'http://localhost:3001/users/login',
        user
      );

      let token = 'Bearer ' + userData.data.token;

      //Relevant if we refresh  the page, yet still want to stay logged in
      sessionStorage.setItem('userToken', token);
      // Axios.defaults.headers.common['Authorization'] = token;

      const isAdmin = userData.data.isAdmin === 1 ? true : false;

      //Saving to store token and isAdmin
      dispatch(loginUser(token, isAdmin));
      history.push('/home');
    } catch (error) {
      console.log(error);
      alert('Error failed: '+ error);
    }
  };

  return (
    <div className='login'>
      <h3>Login please:</h3>
      <form onSubmit={handleSubmit(submit)}>
        <input
          placeholder='Username: '
          type='email'
          required
          {...register('username', {
            required: true,
          })}
        />

        <input
          placeholder='Password: '
          type='password'
          required
          {...register('password', {
            required: true,
            minLength: {
              value: 8,
              message: 'Minimum length is 8',
            },
            maxLength: {
              value: 12,
              message: 'Maximum length is 12',
            },
          })}
        />
        {errors.password && (
          <span className='err-msg'>{errors.password.message}</span>
        )}

        <button type='submit'>Login</button>
      </form>

      <Link className='link' to='/register'>
        If you DONT have account - Please Register
      </Link>
    </div>
  );
};

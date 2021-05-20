import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UsersModel } from '../UsersModel';
import { useForm } from 'react-hook-form';
// import { createAccount } from '../redux/actions';
import './login.css';
import Axios from 'axios';

export const Login = () => {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UsersModel>();

  const [user, setUser] = useState<UsersModel[]>();

  const loginUser = async (user: UsersModel) => {
    try {
      const userData = await Axios.post(
        'http://localhost:3001/users/login',
        user
      );
      console.log(userData.data);

      //Loged users token
      setUser(userData.data);

      history.push('/home');
    } catch (error) {
      console.log(error);
    }
  };

  const submit = (userData: UsersModel) => {
    loginUser(userData);
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

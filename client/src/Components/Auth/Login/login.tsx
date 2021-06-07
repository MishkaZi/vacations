import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UsersModel } from '../UsersModel';
import { useForm } from 'react-hook-form';
import './login.css';
import { loginUser } from '../redux/actions';
import { useDispatch } from 'react-redux';

export const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UsersModel>();

  const submit = (userData: UsersModel) => {
    //Saving to store token and isAdmin
    dispatch(loginUser(userData));
    history.push('/home');
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

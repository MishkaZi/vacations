import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UsersModel } from '../UsersModel';
import { useForm } from 'react-hook-form';
import './login.css';
import { loginUser } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../../store/store';

export const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const token = useSelector((state: RootStore) => state.Auth.token);
  const isAdmin = useSelector((state: RootStore) => state.Auth.isAdmin);
  
  console.log(token, isAdmin);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UsersModel>();

  
  const submit = (userData: UsersModel) => {
    dispatch(loginUser(userData));
  };
  
  // useEffect(() => {
  //   if (isAdmin===true) {
  //     console.log(isAdmin);
      
  //     history.push('/admin-home');
  //   } else {
  //     history.push('/home');
  //   }
  // }, [isAdmin])

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

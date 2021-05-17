import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UsersModel } from '../UsersModel';
import { useForm } from 'react-hook-form';
import { createAccount } from '../redux/actions';
import { useDispatch } from 'react-redux';

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UsersModel>();

  const history = useHistory();
  const dispatch = useDispatch();

  const submit = async (data: UsersModel) => {
    console.log(data);
    try {
      dispatch(createAccount(data));
      history.push('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h3>Register please:</h3>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label>Username:</label>
          <input
            {...register('username', {
              required: true,
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Entered value does not match email format',
              },
            })}
          />
          {errors.username && (
            <span className='err-msg'>{errors.username.message}</span>
          )}
          {errors.username && errors.username.type === 'required' && (
            <span>Username is required</span>
          )}
        </div>
        <div>
          <label>Password:</label>

          <input
            {...register('password', {
              required: true,
              minLength: {
                value: 8,
                message: 'min length is 8',
              },
              maxLength: {
                value: 12,
                message: 'max length is 12',
              },
            })}
          />
          {errors.password && (
            <span className='err-msg'>{errors.password.message}</span>
          )}
          {errors.password && errors.password.type === 'required' && (
            <span>Password is required</span>
          )}
        </div>

        <div>
          <label>First Name:</label>
          <input {...register('firstName', { required: true })} />
          {errors.firstName && (
            <span className='err-msg'>Missing firstName</span>
          )}
        </div>

        <div>
          <label>Last Name:</label>
          <input {...register('lastName', { required: true })} />
          {errors.lastName && <span className='err-msg'>Missing lastName</span>}
        </div>

        <button>Register</button>
      </form>

      <Link to='/'>If you have account - Login</Link>
    </>
  );
};

// import { ChangeEvent } from 'react';
// import { useState } from 'react';
// import axios from 'axios';

// export default function Register() {
//   const [username, setUserName] = useState('');
//   const [password, setPassword] = useState('');

//   const onUserNameChanged = (event: ChangeEvent<HTMLInputElement>) => {
//     setUserName(event.target.value);
//   };

//   const onPasswordChanged = (event: ChangeEvent<HTMLInputElement>) => {
//     setPassword(event.target.value);
//   };

//   const onRegisterClicked = async () => {
//     try {
//       const response = await axios.post('http://localhost:3001/users/', {
//         username,
//         password,
//       });

//       console.log('Catched response: ' + response);
//     } catch (error) {
//       console.log('Catched error: ' + JSON.stringify(error.response));
//     }
//   };

//   return (
//     <div>
//       <input
//         type='text'
//         name='username'
//         placeholder='User name'
//         onChange={onUserNameChanged}
//       />
//       <br />
//       <input
//         type='password'
//         name='password'
//         placeholder='Password'
//         onChange={onPasswordChanged}
//       />
//       <br />

//       <input
//         type='button'
//         value='Register'
//         name='username'
//         placeholder='User name'
//         onClick={onRegisterClicked}
//       />
//     </div>
//   );
// }

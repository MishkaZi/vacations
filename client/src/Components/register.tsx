import { ChangeEvent } from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onUserNameChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const onPasswordChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onRegisterClicked = () => {
    try {
      const response = axios.post('http://localhost:3001/users/register', {
        userName,
        password,
      });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input
        type='text'
        name='userName'
        placeholder='User name'
        onChange={onUserNameChanged}
      />
      <br />
      <input
        type='password'
        name='password'
        placeholder='Password'
        onChange={onPasswordChanged}
      />
      <br />
      <input
        type='button'
        value='Register'
        name='userName'
        placeholder='User name'
        onClick={onRegisterClicked}
      />
    </div>
  );
}

import { ChangeEvent } from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onUserNameChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const onPasswordChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onLoginClicked = async () => {
    try {
      const response = await axios.post('http://localhost:3001/users/login', {
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
        value='Login'
        name='userName'
        placeholder='User name'
        onClick={onLoginClicked}
      />
    </div>
  );
}

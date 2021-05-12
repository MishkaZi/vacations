import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../Components/register';
import { BrowserRouter } from 'react-router-dom';
import Login from '../Components/login';

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path='/register'>
            <Register />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Router;

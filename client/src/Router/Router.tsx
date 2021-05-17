import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Register } from '../Components/Auth/Register/register';
import { Login } from '../Components/Auth/Login/login';
import { LayoutComponent } from '../Components/Layout/Layout/Layout';

const authenticated = true;
const isAdmin = false;

const PrivateRoute = ({ component, ...rest }: any) => {
  if (authenticated && isAdmin) {
    //Go to Admin page
    return <Route {...rest} component={component} />;
  } else if (authenticated) {
    //If regular user, go to vacations main page
    return <Route {...rest} component={component} />;
  }
  //In case not authenticated at all
  return <Route {...rest} component={Login} />;
};

const Routing = () => {
  return (
    <>
      <Switch>
        <Route path='/' exact component={Login} />
        {/* <Route path='/login' exact component={Login} /> */}
        <PrivateRoute path='/home' exact component={LayoutComponent} />
        <Route path='/register' exact component={Register} />
      </Switch>
    </>
  );
};
export default Routing;

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Register } from '../Components/Auth/Register/register';
import { Login } from '../Components/Auth/Login/login';
import { LayoutComponent } from '../Components/Layout/Layout/Layout';
// temporary
import VacationCardAdminAdd from '../Components/Vacations/Admin/VacationCardAdminAdd/VacationCardAdminAdd';
import VacationCardAdminEdit from '../Components/Vacations/Admin/VacationCardAdminEdit/VacationCardAdminEdit';

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
        <Route path='/register' exact component={Register} />

        {/* Private route for authorized user */}
        <PrivateRoute path='/home' exact component={LayoutComponent} />

        {/* Private route for admin */}
        <PrivateRoute
          path='/addVacation'
          exact
          component={VacationCardAdminAdd}
        />
        <PrivateRoute
          path='/editVacation'
          exact
          component={VacationCardAdminEdit}
        />
           {/* <PrivateRoute
          path='/admin-home'
          exact
          component={LayoutComponent isAdmin={'true'}}
        /> */}
      </Switch>
    </>
  );
};
export default Routing;

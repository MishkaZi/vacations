import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Register } from '../Components/Auth/Register/register';
import { Login } from '../Components/Auth/Login/login';
import { LayoutComponent } from '../Components/Layout/Layout/Layout';
// temporary
import VacationCardAdminAdd from '../Components/Vacations/Admin/VacationCardAdminAdd/VacationCardAdminAdd';
import VacationCardAdminEdit from '../Components/Vacations/Admin/VacationCardAdminEdit/VacationCardAdminEdit';
import { useSelector } from 'react-redux';
import { RootStore } from '../store/store';

const Routing = () => {
  const vacations = useSelector(
    (state: RootStore) => state.Vacations.vacations
  );
  console.log(vacations);

  const isAdmin = true;

  const PrivateRoute = ({ component, ...rest }: any) => {
    if (isAdmin) {
      //Go to Admin page
      return <Route {...rest} component={component} />;
    } else {
      //If regular user, go to vacations main page
      return <Route {...rest} component={LayoutComponent} />;
    }
  };

  return (
    <>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/register' exact component={Register} />

        {/* Private route for authorized user */}
        <PrivateRoute path='/home' exact component={LayoutComponent} />

        {/* Private route for admin */}
        <PrivateRoute
          path='/add-vacation'
          exact
          component={VacationCardAdminAdd}
        />
        <PrivateRoute
          path='/edit-vacation'
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

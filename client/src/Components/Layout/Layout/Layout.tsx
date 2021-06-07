import React, { useEffect } from 'react';
import Copyrights from '../Copyrights/Copyrights';
import Header from '../Header/Header';
import './Layout.css';
import Menu from '../Menu/Menu';
import VacationCardList from '../../Vacations/VacationCardList/VacationCardList';

import { RootStore } from '../../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { getVacations } from '../../Vacations/redux/actions';

export const LayoutComponent = (): JSX.Element => {
  const dispatch = useDispatch();

  // const isAdmin = useSelector((state: RootStore) => state.Auth.isAdmin);
  const vacations = useSelector(
    (state: RootStore) => state.Vacations.vacations
  );

  useEffect(() => {
    dispatch(getVacations());
  }, [dispatch]);

  return (
    <div className='Layout'>
      <header className='header'>
        <Header />
      </header>
      <aside className='menu'>
        <Menu />
      </aside>

      <main>
        <VacationCardList vacations={vacations} />
      </main>
      <footer>
        <div className='copyrights'>
          <Copyrights />
        </div>
      </footer>
    </div>
  );
};

import React from 'react';
import Copyrights from '../Copyrights/Copyrights';
import Header from '../Header/Header';
import './Layout.css';
import Menu from '../Menu/Menu';
import VacationCardList from '../../Vacations/VacationCardList/VacationCardList';

export const LayoutComponent = () => {
  return (
    <div className='Layout'>
      <header className='header'>
        <Header />
      </header>
      <aside className='menu'>
        <Menu />
      </aside>

      <main>
        <VacationCardList />
      </main>
      <footer>
        <div className='copyrights'>
          <Copyrights />
        </div>
      </footer>
    </div>
  );
};

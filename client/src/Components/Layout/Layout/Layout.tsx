import React, { useEffect, useState } from 'react';
import Copyrights from '../Copyrights/Copyrights';
import Header from '../Header/Header';
import './Layout.css';
import Menu from '../Menu/Menu';
import VacationCardList from '../../Vacations/VacationCardList/VacationCardList';

//Temporary:
import Axios from 'axios';
import { VacationModel } from '../../Vacations/VacationModel';

export const LayoutComponent = (): JSX.Element => {
  //Using Hooks to display vacations ( temporary )
  const [vacations, setVacations] = useState<VacationModel[]>();

  const getVacations = async () => {
    try {
      const vacations = await Axios.get('http://localhost:3001/vacations/');
      setVacations(vacations.data);
      console.log(vacations.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVacations();
  }, []);

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

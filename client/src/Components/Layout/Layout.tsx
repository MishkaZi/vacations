import './Layout.css';

export const LayoutComponent = () => {
  return (
    <div className='Layout'>
      <header className='header'>
        <h1>Vacations!</h1>
      </header>
      <aside className='menu'></aside>

      <main>main page</main>
      <footer>
        <div className='copyrights'>
          <p>All rights reserved &copy;</p>
        </div>
      </footer>
    </div>
  );
};

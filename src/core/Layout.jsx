import { Outlet, NavLink } from 'react-router-dom';
import Footer from './Footer.jsx'
 
function Layout() {
  return (
    <div className="app">
      <header>
        <nav>
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="./pages/Contact.jsx">Contacto</NavLink>
        </nav>
      </header>
 
      <main>
        <Outlet />
      </main>
 
      <Footer />
    </div>
  );
}
import { Outlet, Link } from 'react-router-dom';
import './Layout.css';

function Layout() {
  return (
    <div className="layout">
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/hooks">Hooks Playground</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} My App</p>
      </footer>
    </div>
  );
}

export default Layout;


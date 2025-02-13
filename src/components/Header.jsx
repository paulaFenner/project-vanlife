import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const activeStyles = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616',
  };

  function fakeLogOut() {
    localStorage.removeItem('loggedin');
  }
  return (
    <>
      <header>
        <Link className="site-logo" to="/">
          #VanLife
        </Link>
        <nav>
          <NavLink to="host" className={({ isActive }) => (isActive ? activeStyles : null)}>
            Host
          </NavLink>
          <NavLink to="about" className={({ isActive }) => (isActive ? activeStyles : null)}>
            About
          </NavLink>
          <NavLink to="vans" className={({ isActive }) => (isActive ? activeStyles : null)}>
            Vans
          </NavLink>

          <Link to="login" className="login-link">
            <img src="/images/avatar-icon.png" className="login-icon" />
          </Link>
          <button onClick={fakeLogOut}>X</button>
        </nav>
      </header>
    </>
  );
}

import { NavLink } from 'react-router-dom'

// NavBar: top navigation with links to the main app routes.
// Uses `NavLink` to apply an active class when a route matches.
export default function NavBar() {
  const linkClass = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <NavLink to="/login" className={linkClass}>Login</NavLink>
        <NavLink to="/dashboard" className={linkClass}>Dashboard</NavLink>
        <NavLink to="/dashboard/profile" className={linkClass}>Profile</NavLink>
        <NavLink to="/dashboard/settings" className={linkClass}>Settings</NavLink>
        <NavLink to="/user/1" className={linkClass}>/user/1</NavLink>
      </div>
    </nav>
  )
}

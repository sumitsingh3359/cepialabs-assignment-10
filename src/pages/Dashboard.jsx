import { Link } from 'react-router-dom'

// Dashboard page: top-level landing for authenticated users.
export default function Dashboard() {
  return (
    <div className="page">
      <div className="card">
        <h2>Dashboard</h2>
        <p>Welcome to the dashboard main page.</p>
        <ul className="list-links">
          <li><Link to="profile">Profile</Link></li>
          <li><Link to="settings">Settings</Link></li>
          <li><Link to="/user/42">View user 42</Link></li>
        </ul>
      </div>
    </div>
  )
}

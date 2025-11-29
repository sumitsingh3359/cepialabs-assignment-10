import { useNavigate } from 'react-router-dom'

// Profile page: shows user information and a Go Back button.
export default function Profile() {
  const navigate = useNavigate()
  return (
    <div className="page">
      <div className="card">
        <h2>User Profile</h2>
        <p>This is the profile page.</p>
        <button className="btn secondary" onClick={() => navigate(-1)} style={{ marginTop: 12 }}>Go Back</button>
      </div>
    </div>
  )
}

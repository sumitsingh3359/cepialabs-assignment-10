import { useNavigate } from 'react-router-dom'

// Settings page: application preferences and toggles.
export default function Settings() {
  const navigate = useNavigate()
  return (
    <div className="page">
      <div className="card">
        <h2>Settings</h2>
        <p>Application settings go here.</p>
        <button className="btn secondary" onClick={() => navigate(-1)} style={{ marginTop: 12 }}>Go Back</button>
      </div>
    </div>
  )
}

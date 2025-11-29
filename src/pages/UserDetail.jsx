import { useParams, useNavigate } from 'react-router-dom'

// UserDetail: dynamic route using `:id` param to show user information.
export default function UserDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  return (
    <div className="page">
      <div className="card">
        <h2>User Detail</h2>
        <p>User ID: <strong>{id}</strong></p>
        <p>Details for user <strong>{id}</strong> would appear here.</p>
        <button className="btn secondary" onClick={() => navigate(-1)} style={{ marginTop: 12 }}>Go Back</button>
      </div>
    </div>
  )
}

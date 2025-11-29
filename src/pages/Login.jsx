import { useNavigate } from 'react-router-dom'

// Login page: demo login that navigates to `/dashboard`.
// Replace handleLogin with real auth in production.
export default function Login() {
  const navigate = useNavigate()
  function handleLogin() {
    // In a real app you'd authenticate here.
    navigate('/dashboard')
  }

  return (
    <div className="page">
      <div className="card">
        <h2>Login</h2>
        <p>Click login to go to the dashboard.</p>
        <button className="btn primary" onClick={handleLogin}>Login</button>
      </div>
    </div>
  )
}

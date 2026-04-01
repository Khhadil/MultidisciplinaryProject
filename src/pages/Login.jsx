import { useState } from 'react';
import { login, isPasswordStrong } from '../logic/auth.js'; // استدعاء الـ JS اللي خدمناه
import { useNavigate } from 'react-router-dom';
function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
 
  const handleAction = () => {
    const result = login(user, pass);
    if (result.success) {
      // إذا نجح الدخول، انتقل للـ Dashboard
      navigate('/dashboard');
    } else {
      alert(result.message);
    }
  };

  return (
    <div style={{ padding: '40px', border: '1px solid #ccc', width: '300px', margin: 'auto' }}>
      <h2>Login Page</h2>
      <input type="text" placeholder="Username" onChange={(e) => setUser(e.target.value)} />
      <br /><br />
      <input type="password" placeholder="Password" onChange={(e) => setPass(e.target.value)} />
      <br /><br />
      <button onClick={handleAction}>Connect</button>
    </div>
  );
}

export default Login;
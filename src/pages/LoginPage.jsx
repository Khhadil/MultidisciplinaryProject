import React, { useState } from 'react';

export default function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost/at-api/auth.php', {
      method: 'POST', body: JSON.stringify({ email, password: pass })
    });
    const data = await res.json();
    if (data.status === 'success') onLogin({ ...data, email });
    else alert(data.message);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <form onSubmit={submit} className="bg-slate-900 p-10 rounded-[2rem] border border-slate-800 w-full max-w-md shadow-2xl">
        <h1 className="text-4xl font-black text-white italic mb-8 text-center">Intern<span className="text-emerald-500">Flow</span></h1>
        <input type="email" placeholder="Email" className="w-full p-4 bg-slate-950 rounded-xl text-white mb-4 border border-slate-800" onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="w-full p-4 bg-slate-950 rounded-xl text-white mb-6 border border-slate-800" onChange={e => setPass(e.target.value)} />
        <button className="w-full bg-emerald-500 p-4 rounded-xl font-bold text-slate-950 hover:bg-emerald-400 transition-all">Connexion</button>
      </form>
    </div>
  );
}
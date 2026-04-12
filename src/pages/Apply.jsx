import React, { useState } from 'react';

export default function Apply({ email, onDone }) {
  const [name, setName] = useState('');
  const [spec, setSpec] = useState('ISIDS');

  const submit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost/at-api/apply.php', {
      method: 'POST', body: JSON.stringify({ email, fullname: name, specialty: spec })
    });
    onDone();
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <form onSubmit={submit} className="bg-slate-900 p-10 rounded-[2rem] border border-emerald-500/20 w-full max-w-lg shadow-2xl">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Déposer ma demande</h2>
        <input required placeholder="Nom et Prénom" className="w-full p-4 bg-slate-950 rounded-xl text-white mb-4 border border-slate-800" onChange={e => setName(e.target.value)} />
        <select className="w-full p-4 bg-slate-950 rounded-xl text-white mb-6 border border-slate-800" onChange={e => setSpec(e.target.value)}>
          <option value="ISIDS">Sécurité Informatique (ISIDS)</option>
          <option value="Dev">Développement Web</option>
          <option value="Network">Réseaux</option>
        </select>
        <button className="w-full bg-emerald-500 p-4 rounded-xl font-bold text-slate-950">Envoyer le dossier</button>
      </form>
    </div>
  );
}
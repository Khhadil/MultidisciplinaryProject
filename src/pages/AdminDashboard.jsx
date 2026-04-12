import React, { useEffect, useState } from 'react';

export default function AdminDashboard() {
  const [students, setStudents] = useState([]);

  const load = () => fetch('http://localhost/at-api/admin_ops.php').then(r => r.json()).then(setStudents);
  useEffect(() => { load(); }, []);

  const accept = async (id) => {
    await fetch('http://localhost/at-api/admin_ops.php', { method: 'POST', body: JSON.stringify({ id }) });
    load();
  };

  const printCert = (s) => {
    const win = window.open('', '_blank');
    win.document.write(`
      <div style="border:10px solid #005baa; padding:50px; text-align:center; font-family:Arial;">
        <h1>ALGÉRIE TÉLÉCOM</h1>
        <h2>Attestation de Stage</h2>
        <p>Nous confirmons l'acceptation de l'étudiant : <b>${s.fullname}</b></p>
        <p>Spécialité : ${s.specialty}</p>
        <p>Date : ${new Date().toLocaleDateString()}</p>
      </div>
    `);
    win.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <h1 className="text-3xl font-black text-slate-900 mb-8">Admin Portal - AT Batna</h1>
      <div className="bg-white rounded-3xl shadow-sm border overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b">
            <tr><th className="p-5">Étudiant</th><th className="p-5">Spécialité</th><th className="p-5">Status</th><th className="p-5">Action</th></tr>
          </thead>
          <tbody>
            {students.map(s => (
              <tr key={s.id} className="border-b">
                <td className="p-5 font-medium">{s.fullname}</td>
                <td className="p-5 text-slate-500">{s.specialty}</td>
                <td className="p-5 text-sm font-bold text-emerald-600 uppercase">{s.status}</td>
                <td className="p-5 flex gap-2">
                  {s.status === 'waiting' && <button onClick={() => accept(s.id)} className="bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm">Accepter</button>}
                  {s.status === 'accepted' && <button onClick={() => printCert(s)} className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm">Imprimer</button>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
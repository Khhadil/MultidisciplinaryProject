import React, { useState } from 'react';
import LoginPage from './pages/LoginPage';
import Apply from './pages/Apply';
import AdminDashboard from './pages/AdminDashboard';

export default function App() {
  const [user, setUser] = useState(null);

  if (!user) return <LoginPage onLogin={setUser} />;

  // 1. واجهة المدير
  if (user.role === 'admin') return <AdminDashboard />;

  // 2. واجهة الطالب - إذا كان يحتاج ملء الاستمارة
  if (user.user_status === 'form') {
    return <Apply email={user.email} onDone={() => setUser({ ...user, user_status: 'waiting' })} />;
  }

  // 3. واجهة الطالب - إذا تم قبوله (Accepted)
  if (user.user_status === 'accepted') {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 text-white text-center">
        <div className="bg-emerald-500/10 border-2 border-emerald-500 p-10 rounded-[2.5rem] shadow-[0_0_50px_rgba(16,185,129,0.2)]">
          <div className="text-6xl mb-4">🎉</div>
          <h1 className="text-4xl font-black mb-4">Félicitations !</h1>
          <p className="text-emerald-400 text-lg">Votre stage chez Algérie Télécom a été accepté.</p>
          <button 
            onClick={() => window.print()} 
            className="mt-8 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-bold transition-all"
          >
            Imprimer l'affectation
          </button>
        </div>
      </div>
    );
  }

  // 4. واجهة الطالب - الحالة الافتراضية (الانتظار Waiting)
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white text-center">
      <div className="p-10 bg-slate-800 rounded-3xl border border-emerald-500/30">
        <h2 className="text-3xl font-bold text-emerald-500 mb-2">Demande en cours</h2>
        <p className="text-slate-400 mb-6">Votre dossier est en cours d'examen par Algérie Télécom.</p>
        <button 
          onClick={() => window.location.reload()} 
          className="text-xs text-slate-500 underline hover:text-emerald-400"
        >
          Actualiser pour vérifier le statut
        </button>
      </div>
    </div>
  );
}
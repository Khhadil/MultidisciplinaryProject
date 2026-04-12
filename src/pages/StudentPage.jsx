import React, { useState } from 'react';

const StudentPage = () => {
  // الحالات: 'form' (ملء البيانات)، 'pending' (انتظار)، 'accepted' (مقبول)
  const [currentStatus, setCurrentStatus] = useState('form'); 

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // هنا مستقبلاً سنقوم بعمل fetch لـ PHP لإرسال البيانات
    setCurrentStatus('pending');
  };

  return (
    <div className="max-w-4xl mx-auto p-4 text-right" dir="rtl">
      
      {/* 1. مرحلة ملء الاستمارة */}
      {currentStatus === 'form' && (
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 animate-in fade-in duration-500">
          <div className="mb-8 border-b border-slate-100 pb-4">
            <h1 className="text-2xl font-black text-[#005baa]">طلب تربص جديد</h1>
            <p className="text-slate-400 text-sm">اتصالات الجزائر - مديرية باتنة</p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">الاسم واللقب</label>
                <input required type="text" className="w-full p-4 bg-slate-50 border rounded-2xl outline-none focus:border-[#005baa]" placeholder="أدخل اسمك الكامل" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">التخصص الجامعي</label>
                <input required type="text" className="w-full p-4 bg-slate-50 border rounded-2xl outline-none focus:border-[#005baa]" placeholder="مثلاً: ISIDS" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">تحميل بطاقة الطالب (PDF)</label>
              <input required type="file" className="w-full p-4 border-2 border-dashed rounded-2xl text-slate-400 cursor-pointer hover:bg-slate-50 transition-all" />
            </div>

            <button type="submit" className="w-full bg-[#005baa] hover:bg-[#004a8a] text-white font-black py-4 rounded-2xl shadow-lg transition-all">
              إرسال الملف للمراجعة
            </button>
          </form>
        </div>
      )}

      {/* 2. مرحلة الانتظار (بعد الإرسال مباشرة) */}
      {currentStatus === 'pending' && (
        <div className="bg-white p-12 rounded-[2.5rem] shadow-xl text-center animate-in zoom-in duration-500 border border-amber-100">
          <div className="w-24 h-24 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-amber-500 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
          </div>
          <h2 className="text-2xl font-black text-slate-800 mb-3">ملفك قيد الدراسة</h2>
          <p className="text-slate-500 max-w-md mx-auto leading-relaxed">
            شكراً لتقديمك. يتم الآن مراجعة معلوماتك من طرف مصلحة التربصات باتصالات الجزائر. ستتغير هذه الحالة فور قبولك وتعيين مجموعتك.
          </p>
          
          {/* زر سري للمناقشة فقط لمحاكاة القبول */}
          <button 
            onClick={() => setCurrentStatus('accepted')}
            className="mt-10 text-[10px] text-slate-200 hover:text-[#005baa] transition-colors"
          >
            [ محاكاة قبول الإدارة ]
          </button>
        </div>
      )}

      {/* 3. مرحلة القبول (بعد موافقة المدير) */}
      {currentStatus === 'accepted' && (
        <div className="space-y-6 animate-in slide-in-from-bottom-5 duration-700">
          
          <div className="bg-emerald-500 text-white p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-black mb-2">تهانينا! تم قبولك</h2>
              <p className="opacity-90">أنت الآن عضو في مجموعة: <span className="font-bold underline italic">AT_ISIDS_2026</span></p>
            </div>
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* البرنامج التدريبي */}
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-lg">
              <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#005baa]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253" /></svg>
                البرنامج التدريبي
              </h3>
              <p className="text-xs text-slate-400 mb-6 font-medium">تم إرسال نسخة مفصلة إلى بريدك الإلكتروني الجامعي.</p>
              <button className="w-full bg-[#005baa] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#004a8a] transition-all">
                تحميل المنهج PDF
              </button>
            </div>

            {/* الشهادة */}
            <div className="bg-slate-900 p-8 rounded-[2rem] shadow-lg text-white">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                شهادة نهاية التربص
              </h3>
              <p className="text-xs text-slate-400 mb-6">ستكون الشهادة قابلة للتحميل بمجرد إنهاء فترة التدريب المحددة.</p>
              <button className="w-full bg-orange-500 text-white py-3 rounded-xl font-bold text-sm hover:bg-orange-600 transition-all opacity-50 cursor-not-allowed">
                تحميل الشهادة
              </button>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default StudentPage;
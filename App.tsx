
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Lifestyle from './components/Lifestyle';
import Location from './components/Location';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        <Stats />
        <Lifestyle />
        <Location />
      </main>

      <Footer />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 left-8 z-[60] flex flex-col gap-4">
        <button 
          className="w-14 h-14 rounded-full bg-white dark:bg-slate-800 shadow-2xl border border-slate-100 dark:border-slate-700 flex items-center justify-center hover:scale-110 transition-transform focus:outline-none"
          onClick={() => setIsDark(!isDark)}
          title="Chế độ tối"
        >
          <span className="material-icons-outlined text-primary dark:text-accent">
            {isDark ? 'light_mode' : 'dark_mode'}
          </span>
        </button>
      </div>

      <div className="fixed bottom-8 right-8 z-[60]">
        <a 
          href="tel:+84937868208"
          className="group relative flex items-center justify-center w-16 h-16 bg-accent text-white rounded-full shadow-2xl hover:scale-110 transition-all animate-bounce"
          title="Gọi ngay"
        >
          <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-25"></span>
          <span className="material-icons-outlined text-3xl relative z-10">phone</span>
          <span className="absolute right-full mr-4 bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
            Hỗ trợ 24/7: +84 937 868 208
          </span>
        </a>
      </div>
    </div>
  );
};

export default App;

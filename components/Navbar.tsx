
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav border-b border-slate-200/50 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-extrabold tracking-tighter text-primary dark:text-white uppercase cursor-pointer">
            Green Paradise
          </span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 text-sm font-semibold uppercase tracking-widest">
          <a className="hover:text-accent transition-colors" href="#overview">Tổng quan</a>
          <a className="hover:text-accent transition-colors" href="#lifestyle">Tiện ích</a>
          <a className="hover:text-accent transition-colors" href="#location">Vị trí</a>
          <a className="hover:text-accent transition-colors" href="#investment">Đầu tư</a>
        </div>

        <div className="flex items-center space-x-4">
          <a 
            href="tel:+84937868208" 
            className="hidden sm:flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl"
          >
            <span className="material-icons-outlined text-sm">phone</span>
            GỌI TƯ VẤN
          </a>
          
          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-primary dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="material-icons-outlined">{isOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-6 flex flex-col space-y-4">
          <a className="text-sm font-semibold uppercase tracking-widest" href="#overview" onClick={() => setIsOpen(false)}>Tổng quan</a>
          <a className="text-sm font-semibold uppercase tracking-widest" href="#lifestyle" onClick={() => setIsOpen(false)}>Tiện ích</a>
          <a className="text-sm font-semibold uppercase tracking-widest" href="#location" onClick={() => setIsOpen(false)}>Vị trí</a>
          <a className="text-sm font-semibold uppercase tracking-widest" href="#investment" onClick={() => setIsOpen(false)}>Đầu tư</a>
          <a 
            href="tel:+84937868208" 
            className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-sm w-full text-center flex items-center justify-center gap-2"
          >
            <span className="material-icons-outlined text-sm">phone</span>
            GỌI TƯ VẤN
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

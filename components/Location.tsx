
import React from 'react';
import { LocationMarker } from '../types';

const DISTANCES: LocationMarker[] = [
  { time: '45p', destination: 'Đến Trung tâm Tài chính TP.HCM' },
  { time: '30p', destination: 'Đến Sân bay Quốc tế Long Thành' },
  { time: '10p', destination: 'Đến Khu dự trữ sinh quyển Cần Giờ' },
];

const Location: React.FC = () => {
  return (
    <section className="bg-slate-100 dark:bg-slate-900/50 py-32" id="location">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-accent font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Vị trí Đắc địa</span>
          <h2 className="text-5xl font-serif text-primary dark:text-white mb-6">Tâm điểm của Mọi Cơ hội</h2>
          <p className="text-slate-500 dark:text-slate-400">Vị trí lý tưởng mang lại sự cân bằng hoàn hảo giữa cuộc sống bình yên bên biển và sự tiện nghi của đô thị.</p>
        </div>
        
        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-white dark:bg-slate-800 p-4">
          <div className="aspect-[21/9] w-full bg-slate-200 dark:bg-slate-700 rounded-[1.5rem] relative overflow-hidden">
            <img 
              alt="Bản đồ vị trí chiến lược" 
              className="w-full h-full object-cover opacity-80" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4bdBIrFdAU7KamFA-8H9D-Ri9MOFCHL5Oh1tX1Zhdyt7ay-TfBsYf7LUt0TuM_il4cM0HE07Rj45k6hK0D_LnLIE09qcXHPgzfPvCCMEI8IdWmyxO3HYg_gnjsvn-od1HCUy5MbTVM1y0iCsY8XeC3dmvPYN9sGb7L9VsnXMtlQ61nqyvwlelxOAztZu2KkwVMBU5H1UmhZBDqAq8P21jg8PAi1826MQJXKyw6kzzU_EBj0-HRwYHvyw3Y6DLRrPps15i3CpAbUsa"
            />
            {/* Pulsing Marker */}
            <div className="absolute top-1/2 left-1/3 group">
              <div className="w-6 h-6 bg-accent rounded-full animate-ping absolute inset-0"></div>
              <div className="w-6 h-6 bg-accent rounded-full border-4 border-white relative z-10 cursor-pointer shadow-lg"></div>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 bg-white dark:bg-slate-800 px-4 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-100 dark:border-slate-700">
                <span className="text-sm font-bold text-primary dark:text-white">Vị trí Green Paradise</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-12">
            {DISTANCES.map((dist, idx) => (
              <div key={idx} className={`flex items-center gap-6 ${idx !== 0 ? 'md:border-l border-slate-200 dark:border-slate-700 md:pl-8' : ''}`}>
                <span className="text-4xl font-serif text-accent">{dist.time}</span>
                <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                  {dist.destination.split(' ').map((word, i) => i === 3 ? <><br/>{word}</> : ` ${word}`)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;

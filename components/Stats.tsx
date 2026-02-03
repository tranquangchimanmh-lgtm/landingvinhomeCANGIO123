
import React from 'react';
import { StatItem } from '../types';

const STATS_DATA: StatItem[] = [
  { icon: 'straighten', label: 'Tổng diện tích', value: '2.870 ha' },
  { icon: 'pool', label: 'Đường bờ biển', value: '12,5 km' },
  { icon: 'forest', label: 'Diện tích xanh', value: '520 ha' },
  { icon: 'apartment', label: 'Tổng số căn', value: '15.000+' },
];

const Stats: React.FC = () => {
  return (
    <section className="pt-48 pb-24 bg-white dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-b border-slate-100 dark:border-slate-800 pb-24">
          {STATS_DATA.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent transition-colors duration-300">
                <span className="material-icons-outlined text-primary group-hover:text-white">{stat.icon}</span>
              </div>
              <p className="text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 font-bold mb-1">{stat.label}</p>
              <p className="text-3xl font-serif text-primary dark:text-white">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

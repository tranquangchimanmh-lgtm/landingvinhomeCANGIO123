
import React from 'react';
import { BenefitItem } from '../types';

const BENEFITS: BenefitItem[] = [
  {
    icon: 'trending_up',
    title: 'Gia tăng giá trị vốn',
    description: 'Tăng trưởng dự kiến 15-20% mỗi năm nhờ sự phát triển hạ tầng khu vực.'
  },
  {
    icon: 'map',
    title: 'Kết nối chiến lược',
    description: 'Các dự án cầu và cao tốc sắp tới sẽ rút ngắn thời gian về trung tâm TP.HCM còn 45 phút.'
  },
  {
    icon: 'eco',
    title: 'Trung tâm Du lịch Sinh thái',
    description: 'Định vị là điểm đến du lịch bền vững theo quy hoạch tổng thể của Chính phủ.'
  }
];

const Lifestyle: React.FC = () => {
  return (
    <section className="py-24 overflow-hidden" id="lifestyle">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="flex-1 space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-primary dark:text-white mb-8">
                Thiên Đường Dành Riêng Cho Cuộc Sống
              </h2>
              <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
                Trải nghiệm đỉnh cao của sự sang trọng ven biển nơi từng chi tiết đều được chăm chút tỉ mỉ. Từ các câu lạc bộ bãi biển riêng tư đến sân golf vô địch, phong cách sống của bạn là không giới hạn.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-2xl overflow-hidden aspect-[4/5] relative group shadow-xl">
                <img 
                  alt="Hồ bơi vô cực" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCoMQ6EgPOUkE9J68r_XSfU_2iyYNdMyz5KJ7FZwy_qXQAtnAoSfa1MynyHppD646MJMkjCrllUsHZDiRxn8iozzCncmQ-8Up1uwJhMWTzlfJSojTB-3LnMZlDWeChruw1951kcdPICVnizz4RzPm_ammCPI_mQwZGkugRslFAkNSMCyO-pHxvh36OFtW__lmcM6oRJLb_90aHL2GGm7_JeG8v0sVpxS8ikQxrbr4t74ZPtycNX6OMX-Kl4pbw0vlcAKyO7HSqTwp8"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-8">
                  <h4 className="text-white text-xl font-bold">Hồ bơi vô cực sát biển</h4>
                  <p className="text-white/70 text-sm">Nơi chân trời chạm tới thềm nhà</p>
                </div>
              </div>
              
              <div className="rounded-2xl overflow-hidden aspect-[4/5] relative group shadow-xl">
                <img 
                  alt="Bến du thuyền" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAk4A8JJ39wNajXE0e65LtuN0XHmqP-_25As-PK9YRMlyxtR-iOafAnHY-A33Bjt1Zuy429iAd__K3sTWMsuRLb5CeDVElBP2lAbSchcPE_Q49r_pDCFulHNIxsv1NjrCGM5Tor5W7WgZwItIgJjntVYmzQSWWs-C1oNI6vnAaZlZJGDBE4gX32G6O3TCsRat8dOeXob_Hu82zGZacci0EQ8VTkmctGmEFkrxBvxupHY6BWpHInlb8XfcNOsSv70Liq1fPFw3g8QB7Y"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-8">
                  <h4 className="text-white text-xl font-bold">Bến du thuyền Quốc tế</h4>
                  <p className="text-white/70 text-sm">Ra khơi tận hưởng sự khác biệt</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-12 lg:mt-24 shadow-inner border border-slate-100 dark:border-slate-800">
            <h2 id="investment" className="text-4xl font-serif text-primary dark:text-white mb-8">Giá trị của Tương lai</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-12">Tọa lạc tại vị trí chiến lược ngay trung tâm kinh tế biển tiếp theo của Việt Nam, Green Paradise không chỉ là một ngôi nhà—đó là tài sản với tiềm năng tăng trưởng vô hạn.</p>
            
            <ul className="space-y-8">
              {BENEFITS.map((benefit, idx) => (
                <li key={idx} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white dark:bg-slate-700 rounded-xl shadow-sm flex items-center justify-center">
                    <span className="material-icons-outlined text-accent">{benefit.icon}</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-1 dark:text-white">{benefit.title}</h5>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{benefit.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            
            <button className="mt-12 group flex items-center gap-4 text-primary dark:text-accent font-bold hover:gap-6 transition-all">
              KHÁM PHÁ QUY HOẠCH TỔNG THỂ 
              <span className="material-icons-outlined transition-transform">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lifestyle;

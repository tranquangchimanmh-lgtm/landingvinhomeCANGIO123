
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="overview" className="relative min-h-[90vh] w-full overflow-hidden flex flex-col">
      <img 
        alt="Bờ biển Cần Giờ" 
        className="absolute inset-0 w-full h-full object-cover" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCQjUEDvWHWRQzyVtx82cL3GJeWk3WxmP5WwrfGwsPEfN2nVXvTSK4CFXyllaYIC2auG7k2XxXhZnP2CeeB1Fh6DriaFkovB_ybSgW2vPWmxMaN_ac5Pp5W6UnBCWhuF2J42fWLhfC3su9JDrzOQlBgtcZKLSDM_bbFRaDktSxbCXGpcRAMmjeb8DsK24n8sntKFtGqHhrZi8ekmVwCrBAQF399vrBQFQpoAJ3aJcZ4rxDo0ffyHef2PAz_kZigQ-7Fu9v4dO1S5LV"
      />
      <div className="absolute inset-0 hero-gradient"></div>
      
      <div className="relative flex-grow max-w-7xl mx-auto px-6 w-full flex flex-col justify-center py-32">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 bg-accent text-white rounded-full text-xs font-bold tracking-[0.2em] mb-6 uppercase">
            Sống Sang Trọng Giữa Biển Khơi
          </span>
          <h1 className="font-serif text-6xl md:text-8xl text-white leading-[1.1] mb-8">
            Cần Giờ <br/><span className="italic font-normal">Green Paradise</span>
          </h1>
          <p className="text-xl text-white/90 leading-relaxed max-w-xl mb-12 font-light">
            Nơi thiên nhiên hoang sơ giao thoa cùng sự tinh tế hiện đại. Thiên đường nghỉ dưỡng biển hàng đầu Việt Nam dành cho giới thượng lưu.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="tel:+84937868208" 
              className="bg-accent text-white px-10 py-5 rounded-full font-bold tracking-widest hover:bg-white hover:text-primary transition-all flex items-center gap-3 shadow-2xl"
            >
              <span className="material-icons-outlined">phone_in_talk</span>
              GỌI TƯ VẤN NGAY
            </a>
            <a 
              href="#lifestyle" 
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-full font-bold tracking-widest hover:bg-white/20 transition-all"
            >
              KHÁM PHÁ TIỆN ÍCH
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

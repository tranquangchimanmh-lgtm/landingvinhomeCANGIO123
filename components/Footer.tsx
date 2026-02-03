
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-background-dark pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 pb-20 border-b border-slate-100 dark:border-slate-800">
          <div className="col-span-1 lg:col-span-1">
            <span className="text-2xl font-extrabold tracking-tighter text-primary dark:text-white uppercase mb-8 block">
              Green Paradise
            </span>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
              Kiệt tác nghỉ dưỡng thượng lưu tại Việt Nam, nơi sự tĩnh lặng của thiên nhiên hội ngộ cùng trí tuệ con người.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm">
                <span className="material-icons-outlined text-xl">facebook</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm">
                <span className="material-icons-outlined text-xl">camera_alt</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm">
                <span className="material-icons-outlined text-xl">play_circle</span>
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-sm font-bold uppercase tracking-widest mb-8 text-primary dark:text-white">Dự án</h5>
            <ul className="space-y-4 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <li><a className="hover:text-accent transition-colors" href="#">Chi tiết Quy hoạch</a></li>
              <li><a className="hover:text-accent transition-colors" href="#">Sản phẩm đang mở bán</a></li>
              <li><a className="hover:text-accent transition-colors" href="#">Tiến độ thi công</a></li>
              <li><a className="hover:text-accent transition-colors" href="#">Thư viện ảnh</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-bold uppercase tracking-widest mb-8 text-primary dark:text-white">Khám phá</h5>
            <ul className="space-y-4 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <li><a className="hover:text-accent transition-colors" href="#">Phong cách sống biển</a></li>
              <li><a className="hover:text-accent transition-colors" href="#">Cẩm nang đầu tư</a></li>
              <li><a className="hover:text-accent transition-colors" href="#">Về Chủ đầu tư</a></li>
              <li><a className="hover:text-accent transition-colors" href="#">Phát triển bền vững</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-bold uppercase tracking-widest mb-8 text-primary dark:text-white">Liên hệ</h5>
            <address className="not-italic text-sm text-slate-500 dark:text-slate-400 space-y-4">
              <p className="flex items-start gap-3">
                <span className="material-icons-outlined text-accent text-lg">location_on</span>
                Huyện Cần Giờ, <br/>TP. Hồ Chí Minh, Việt Nam
              </p>
              <a href="tel:+84937868208" className="flex items-center gap-3 hover:text-accent transition-colors">
                <span className="material-icons-outlined text-accent text-lg">phone</span>
                +84 937 868 208
              </a>
              <p className="flex items-center gap-3">
                <span className="material-icons-outlined text-accent text-lg">mail</span>
                info@greenparadise.vn
              </p>
            </address>
          </div>
        </div>

        <div className="pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-slate-400 dark:text-slate-500">© 2024 Green Paradise Luxury Resort. Bảo lưu mọi quyền.</p>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
            <a className="hover:text-primary dark:hover:text-white" href="#">Chính sách bảo mật</a>
            <a className="hover:text-primary dark:hover:text-white" href="#">Điều khoản dịch vụ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

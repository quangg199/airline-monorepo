import React, { useState } from 'react';

const Checkout = () => {
  const [passenger, setPassenger] = useState({ name: '', cccd: '', phone: '' });

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6 pt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* CỘT TRÁI: THÔNG TIN & THANH TOÁN */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* 1. THÔNG TIN HÀNH KHÁCH (Bảng PASSENGERS) */}
          <section className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-md">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-sm">01</span>
              Thông tin hành khách
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-blue-400 uppercase tracking-widest ml-1">Họ và Tên</label>
                <input type="text" placeholder="NGUYEN VAN A" className="w-full bg-slate-800 border border-white/10 p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-blue-400 uppercase tracking-widest ml-1">Số CCCD/Passport</label>
                <input type="text" placeholder="00120300xxxx" className="w-full bg-slate-800 border border-white/10 p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
          </section>

          {/* 2. PHƯƠNG THỨC THANH TOÁN */}
          <section className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-md">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-sm">02</span>
              Phương thức thanh toán
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['Thẻ Visa/Master', 'Ví MoMo', 'Chuyển khoản'].map((method, i) => (
                <div key={i} className="p-6 border border-white/10 rounded-2xl bg-white/5 hover:border-yellow-400 cursor-pointer transition-all flex flex-col items-center gap-3 group">
                   <div className="text-2xl group-hover:scale-110 transition-transform">💳</div>
                   <span className="text-sm font-bold">{method}</span>
                </div>
              ))}
            </div>
          </section>

          <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-black py-5 rounded-2xl shadow-2xl shadow-blue-900/40 transition-all uppercase tracking-[0.2em]">
            Xác nhận thanh toán & Đặt vé
          </button>
        </div>

        {/* CỘT PHẢI: TÓM TẮT ĐƠN HÀNG (STICKY) */}
        <div className="lg:col-span-1">
          <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-8 rounded-[3rem] sticky top-24 shadow-2xl">
            <h3 className="text-xl font-bold mb-6 text-yellow-400 italic">Chi tiết chuyến bay</h3>
            
            {/* Tóm tắt Flight */}
            <div className="border-b border-white/10 pb-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-black">HAN</span>
                <span className="text-blue-500">✈</span>
                <span className="text-2xl font-black">SGN</span>
              </div>
              <p className="text-xs text-blue-200/50 uppercase tracking-widest">SK-102 • 08:00, 20/05/2026</p>
            </div>

            {/* Giá tiền */}
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-sm">
                <span className="text-blue-200/50">Giá vé (01 người):</span>
                <span>1.250.000 VND</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-blue-200/50">Dịch vụ (Suất ăn):</span>
                <span>+150.000 VND</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-blue-200/50">Khuyến mãi (WELCOME20):</span>
                <span className="text-red-400">-250.000 VND</span>
              </div>
            </div>

            <div className="pt-6 border-t border-white/20 flex justify-between items-end">
              <span className="font-bold">TỔNG CỘNG</span>
              <span className="text-3xl font-black text-yellow-400">1.150.000 VND</span>
            </div>
            
            <p className="mt-6 text-[10px] text-center text-blue-200/30 leading-relaxed uppercase tracking-tighter">
              Bằng cách nhấn nút thanh toán, bạn đồng ý với các điều khoản và quy định hành lý của Skylink Aviation.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Checkout;
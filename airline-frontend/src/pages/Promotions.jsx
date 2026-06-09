import React from 'react';

const Promotions = () => {
  const promoCards = [
    {
      id: 1,
      title: "ƯU ĐÃI THÀNH VIÊN MỚI",
      discount: "Giảm 20%",
      code: "WELCOME20",
      desc: "Áp dụng cho lần đặt vé đầu tiên trên hệ thống Skylink.",
      color: "from-blue-600 to-cyan-500",
      expiry: "30/04/2026"
    },
    {
      id: 2,
      title: "HÈ RỰC RỠ - GIẢM THẢ GA",
      discount: "500.000 VND",
      code: "SUMMER2026",
      desc: "Dành cho các chặng bay nội địa xuất phát từ Hà Nội.",
      color: "from-orange-600 to-yellow-500",
      expiry: "15/05/2026"
    },
    {
      id: 3,
      title: "ĐẶC QUYỀN HẠNG PLATINUM",
      discount: "Nâng hạng miễn phí",
      code: "PLATINUMUP",
      desc: "Tự động nâng hạng ghế thương gia cho thành viên thân thiết.",
      color: "from-purple-600 to-pink-500",
      expiry: "Vô thời hạn"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6 pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h1 className="text-5xl font-black italic mb-3 tracking-tighter">ƯU ĐÃI ĐỘC QUYỀN</h1>
            <p className="text-blue-200/50 uppercase tracking-[0.3em] text-sm font-bold">
              Tiết kiệm hơn cho mỗi hành trình bay
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-md">
            <span className="text-blue-400 text-sm">Điểm tích lũy của bạn: </span>
            <span className="text-yellow-400 font-bold ml-2">2,500 pts</span>
          </div>
        </div>

        {/* Lưới các thẻ Khuyến mãi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promoCards.map((promo) => (
            <div 
              key={promo.id} 
              className="group relative bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-white/30 transition-all duration-500 shadow-2xl"
            >
              {/* Dải màu trang trí phía trên */}
              <div className={`h-32 bg-gradient-to-br ${promo.color} opacity-80 group-hover:opacity-100 transition-opacity relative`}>
                 <div className="absolute top-4 right-6 text-white/30 text-6xl font-black italic select-none">OFFER</div>
              </div>

              <div className="p-8 -mt-12 relative z-10">
                <div className="bg-slate-900 w-fit px-6 py-2 rounded-full border border-white/10 text-yellow-400 font-bold text-xs mb-6 shadow-xl">
                  HẠN DÙNG: {promo.expiry}
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{promo.title}</h3>
                <div className="text-4xl font-black mb-4 tracking-tighter">{promo.discount}</div>
                <p className="text-blue-200/50 text-sm mb-8 leading-relaxed">{promo.desc}</p>

                {/* Phần copy mã Code */}
                <div className="flex items-center justify-between bg-white/5 p-4 rounded-2xl border border-dashed border-white/20 group-hover:border-blue-500/50 transition-all">
                  <div>
                    <p className="text-[10px] text-blue-400 font-bold uppercase mb-1">Mã ưu đãi</p>
                    <span className="font-mono text-xl tracking-widest font-bold">{promo.code}</span>
                  </div>
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(promo.code);
                      alert("Đã sao chép mã khuyến mãi!");
                    }}
                    className="bg-white text-slate-900 px-4 py-2 rounded-xl text-xs font-black hover:bg-yellow-400 transition-all active:scale-95"
                  >
                    SAO CHÉP
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Khối Thông báo đăng ký Newsletter */}
        <div className="mt-20 bg-gradient-to-r from-blue-900/40 to-slate-800/40 border border-white/10 p-12 rounded-[3rem] text-center backdrop-blur-xl">
          <h2 className="text-3xl font-bold mb-4">Bạn không muốn bỏ lỡ deal hời?</h2>
          <p className="text-blue-200/60 mb-8 max-w-xl mx-auto text-sm">
            Để lại email của bạn, chúng tôi sẽ gửi những mã giảm giá "bí mật" chỉ dành riêng cho bạn mỗi tuần.
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Email của bạn..." 
              className="flex-1 bg-white/5 border border-white/10 px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-2xl transition-all">
              ĐĂNG KÝ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
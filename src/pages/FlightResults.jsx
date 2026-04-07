import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// --- Sub-Component: Thẻ hiển thị từng chuyến bay ---
const FlightCard = ({ flight }) => {
  const navigate = useNavigate();

  // Hàm xử lý khi người dùng chọn vé
  const handleSelect = () => {
    // Senior tip: Sau này mình sẽ truyền ID chuyến bay qua State hoặc Context ở đây
    console.log("Đã chọn chuyến bay:", flight.flight_number);
    navigate('/services'); 
  };

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 mb-6 hover:border-blue-500/50 transition-all group shadow-2xl">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* 1. Thông tin hãng & Máy bay */}
        <div className="flex items-center gap-6 w-full md:w-1/4">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-900/40">
            <span className="text-white font-black text-2xl italic tracking-tighter">SK</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight">{flight.flight_number}</h3>
            <p className="text-blue-300/40 text-xs uppercase tracking-widest">{flight.aircraft}</p>
          </div>
        </div>

        {/* 2. Lộ trình bay (Điểm đi - Máy bay - Điểm đến) */}
        <div className="flex-1 flex items-center justify-center gap-8 w-full">
          <div className="text-center">
            <p className="text-4xl font-black text-white">{flight.dep_time}</p>
            <p className="text-blue-400 font-bold tracking-widest">{flight.from}</p>
          </div>

          <div className="flex-1 flex flex-col items-center relative max-w-[200px]">
            <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 px-3 text-blue-400 text-lg group-hover:scale-125 transition-transform">
                ✈
              </div>
            </div>
            <p className="text-[10px] uppercase tracking-[0.3em] mt-3 text-blue-200/30 font-medium">Bay thẳng • 2h 15m</p>
          </div>

          <div className="text-center">
            <p className="text-4xl font-black text-white">{flight.arr_time}</p>
            <p className="text-blue-400 font-bold tracking-widest">{flight.to}</p>
          </div>
        </div>

        {/* 3. Giá tiền & Nút hành động */}
        <div className="text-right w-full md:w-1/4 space-y-3 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-8">
          <p className="text-[10px] text-blue-200/40 uppercase tracking-[0.2em]">Giá vé cơ bản</p>
          <p className="text-3xl font-black text-yellow-400 tracking-tighter">
            {flight.price.toLocaleString()} <span className="text-sm font-normal text-white/50">VND</span>
          </p>
          <button 
            onClick={handleSelect}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-4 rounded-2xl transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-blue-900/20 uppercase text-xs tracking-widest"
          >
            Chọn chuyến này
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Component Chính: Trang kết quả tìm kiếm ---
const FlightResults = () => {
  // Mock data khớp với ERD (Bảng FLIGHTS & AIRCRAFTS)
  const [flights] = useState([
    { id: 1, flight_number: 'SK-102', aircraft: 'Boeing 787 Dreamliner', from: 'HAN', to: 'SGN', dep_time: '08:00', arr_time: '10:15', price: 1250000 },
    { id: 2, flight_number: 'SK-205', aircraft: 'Airbus A350-900', from: 'HAN', to: 'SGN', dep_time: '14:30', arr_time: '16:45', price: 1580000 },
    { id: 3, flight_number: 'SK-309', aircraft: 'Boeing 737 MAX', from: 'HAN', to: 'SGN', dep_time: '21:15', arr_time: '23:30', price: 990000 },
  ]);

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6 pt-28 selection:bg-yellow-400 selection:text-black">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        
        {/* SIDEBAR BỘ LỌC (FILTER) */}
        <aside className="w-full lg:w-80 space-y-6">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] sticky top-28">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 italic">
              <span className="w-2 h-8 bg-yellow-400 rounded-full"></span>
              Bộ lọc
            </h2>
            
            <div className="space-y-8">
              {/* Lọc theo giờ */}
              <div className="space-y-4">
                <p className="text-xs font-black text-blue-400 uppercase tracking-widest">Khung giờ bay</p>
                {['00:00 - 06:00', '06:00 - 12:00', '12:00 - 18:00', '18:00 - 24:00'].map((time, i) => (
                  <label key={i} className="flex items-center gap-3 text-sm text-blue-100/60 cursor-pointer hover:text-white transition-colors">
                    <input type="checkbox" className="w-5 h-5 rounded-lg bg-slate-800 border-white/10 checked:bg-blue-600 transition-all cursor-pointer" />
                    {time}
                  </label>
                ))}
              </div>

              {/* Lọc theo giá */}
              <div className="pt-6 border-t border-white/10">
                <p className="text-xs font-black text-blue-400 uppercase tracking-widest mb-4">Mức giá tối đa</p>
                <input type="range" className="w-full h-1 bg-blue-900 rounded-lg appearance-none cursor-pointer accent-yellow-400" min="500000" max="5000000" />
                <div className="flex justify-between text-[10px] text-blue-200/30 mt-2">
                  <span>500k</span>
                  <span>5000k</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* DANH SÁCH KẾT QUẢ CHUYẾN BAY */}
        <main className="flex-1">
          <div className="mb-10 flex flex-col md:flex-row justify-between items-end gap-4">
            <div>
              <div className="flex items-center gap-4 mb-2">
                <h1 className="text-4xl font-black italic tracking-tighter text-white">HAN</h1>
                <span className="text-yellow-400 text-2xl">➔</span>
                <h1 className="text-4xl font-black italic tracking-tighter text-white">SGN</h1>
              </div>
              <p className="text-blue-300/40 text-sm font-medium uppercase tracking-[0.2em]">
                Kết quả: {flights.length} chuyến bay khả dụng
              </p>
            </div>
            
            <div className="flex items-center gap-4 bg-white/5 p-2 rounded-2xl border border-white/10">
               <span className="text-[10px] font-bold text-blue-400 ml-4 uppercase tracking-widest">Sắp xếp:</span>
               <select className="bg-transparent text-sm font-bold text-white outline-none pr-4 cursor-pointer">
                  <option className="bg-slate-900">Giá thấp nhất</option>
                  <option className="bg-slate-900">Khởi hành sớm</option>
               </select>
            </div>
          </div>

          {/* Render danh sách thẻ chuyến bay */}
          <div className="space-y-2">
            {flights.map(item => (
              <FlightCard key={item.id} flight={item} />
            ))}
          </div>

          {/* Thông báo cuối trang */}
          <div className="mt-12 p-8 border border-dashed border-white/10 rounded-[2rem] text-center">
            <p className="text-blue-200/20 text-sm italic font-light">
              Hiển thị giá vé đã bao gồm thuế và phí cơ bản. Tùy chọn hạng ghế sẽ hiển thị sau khi chọn chuyến.
            </p>
          </div>
        </main>

      </div>
    </div>
  );
};

export default FlightResults;
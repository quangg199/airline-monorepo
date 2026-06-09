import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const HomePage = () => {
  const navigate = useNavigate();
  
  // --- States quản lý dữ liệu ---
  const [airports, setAirports] = useState([]); // Danh sách sân bay từ API
  const [searchData, setSearchData] = useState({
    departure: '',
    arrival: '',
    date: ''
  });

  // 1. Gọi API lấy danh sách sân bay khi trang web vừa load
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/airports')
      .then(response => {
        // Laravel trả về: { status: 'success', data: [...] }
        setAirports(response.data.data);
      })
      .catch(error => {
        console.error("Lỗi kết nối API Laravel:", error);
      });
  }, []);

  // 2. Hàm xử lý khi nhấn "Tìm chuyến"
  const handleSearch = () => {
    if (!searchData.departure || !searchData.arrival) {
      alert("Vui lòng chọn đầy đủ điểm đi và điểm đến!");
      return;
    }
    // Chuyển sang trang kết quả kèm theo dữ liệu tìm kiếm (optional)
    navigate('/flights');
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans selection:bg-yellow-400 selection:text-black">
      
      {/* 1. NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-black bg-gradient-to-r from-blue-400 to-yellow-300 bg-clip-text text-transparent">
            SKYLINK
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-blue-100">
            <a href="/flights" className="hover:text-yellow-400 transition-colors">Chuyến bay</a>
            <a href="/services" className="hover:text-yellow-400 transition-colors">Dịch vụ</a>
            <a href="/promotions" className="hover:text-yellow-400 transition-colors">Khuyến mãi</a>
            <a href="/support" className="hover:text-yellow-400 transition-colors">Hỗ trợ</a>
          </div>
          <button className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-full text-sm font-bold transition-all shadow-lg shadow-blue-900/40">
            Đăng nhập
          </button>
        </div>
      </nav>

      {/* 2. HERO SECTION & SEARCH FORM */}
      <section className="relative pt-32 pb-20 px-6 flex flex-col items-center justify-center min-h-[80vh] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 text-center mb-12">
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter drop-shadow-2xl">
            BAY XA <span className="text-yellow-400">HƠN</span>
          </h1>
          <p className="text-blue-200 text-lg md:text-xl font-light max-w-2xl mx-auto">
            Trải nghiệm dịch vụ hàng không đẳng cấp 5 sao với Skylink Aviation.
          </p>
        </div>

        {/* Search Box - Đã chuyển sang Select động */}
        <div className="relative z-10 w-full max-w-6xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] shadow-2xl">
          <div className="flex flex-col md:flex-row gap-6">
            
            {/* Điểm khởi hành */}
            <div className="flex-1 space-y-2">
              <label className="text-xs font-bold text-blue-400 uppercase tracking-widest ml-1">Khởi hành</label>
              <select 
                className="w-full bg-slate-800/50 border border-white/10 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer"
                value={searchData.departure}
                onChange={(e) => setSearchData({...searchData, departure: e.target.value})}
              >
                <option value="">Chọn điểm đi?</option>
                {airports.map(ap => (
                  <option key={ap.id} value={ap.iata_code} className="bg-slate-900">
                    {ap.city} ({ap.iata_code})
                  </option>
                ))}
              </select>
            </div>

            {/* Điểm đến */}
            <div className="flex-1 space-y-2">
              <label className="text-xs font-bold text-blue-400 uppercase tracking-widest ml-1">Điểm đến</label>
              <select 
                className="w-full bg-slate-800/50 border border-white/10 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer"
                value={searchData.arrival}
                onChange={(e) => setSearchData({...searchData, arrival: e.target.value})}
              >
                <option value="">Bạn muốn đi đâu?</option>
                {airports.map(ap => (
                  <option key={ap.id} value={ap.iata_code} className="bg-slate-900">
                    {ap.city} ({ap.iata_code})
                  </option>
                ))}
              </select>
            </div>

            {/* Ngày đi */}
            <div className="w-full md:w-56 space-y-2">
              <label className="text-xs font-bold text-blue-400 uppercase tracking-widest ml-1">Ngày đi</label>
              <input 
                type="date" 
                className="w-full bg-slate-800/50 border border-white/10 p-4 rounded-2xl [color-scheme:dark] outline-none"
                onChange={(e) => setSearchData({...searchData, date: e.target.value})}
              />
            </div>

            <div className="flex items-end">
              <button 
                onClick={handleSearch}
                className="w-full md:w-auto bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-black px-10 py-4 rounded-2xl transition-all hover:scale-105 shadow-xl shadow-yellow-900/20 uppercase"
              >
                Tìm chuyến
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DỊCH VỤ NỔI BẬT */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10 flex items-center gap-4">
          <span className="w-12 h-1 bg-yellow-400 rounded-full"></span>
          Dịch vụ đẳng cấp
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Suất ăn hạng nhất", desc: "Thưởng thức ẩm thực tinh tế từ các đầu bếp hàng đầu thế giới." },
            { title: "Phòng chờ VIP", desc: "Không gian yên tĩnh, sang trọng trước mỗi chuyến bay của bạn." },
            { title: "Thêm hành lý", desc: "Gói hành lý linh hoạt, phù hợp cho mọi nhu cầu di chuyển." }
          ].map((item, index) => (
            <div key={index} className="group p-8 bg-white/5 border border-white/5 rounded-3xl hover:bg-white/10 transition-all cursor-pointer">
              <div className="w-12 h-12 bg-blue-600/30 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform text-blue-400 font-bold">0{index+1}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-blue-200/60 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/5 py-10 text-center text-blue-200/30 text-sm">
        © 2026 Skylink Aviation Global Solutions. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
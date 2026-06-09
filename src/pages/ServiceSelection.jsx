import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceSelection = () => {
  const navigate = useNavigate();

  // Giả lập dữ liệu từ bảng ANCILLARY_SERVICES
  const [services] = useState([
    { id: 1, name: 'Hành lý ký gửi 20kg', price: 250000, type: 'Baggage', icon: '🧳' },
    { id: 2, name: 'Suất ăn Bò Mỹ sốt tiêu', price: 150000, type: 'Meal', icon: '🍱' },
    { id: 3, name: 'Bảo hiểm du lịch Gold', price: 120000, type: 'Insurance', icon: '🛡️' },
    { id: 4, name: 'Ưu tiên làm thủ tục', price: 80000, type: 'Priority', icon: '⚡' },
  ]);

  const [selectedServices, setSelectedServices] = useState([]);
  const basePrice = 1250000; // Giá vé gốc từ trang trước

  // Hàm chọn/hủy dịch vụ
  const toggleService = (service) => {
    if (selectedServices.find(s => s.id === service.id)) {
      setSelectedServices(selectedServices.filter(s => s.id !== service.id));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  // Tính tổng tiền dịch vụ
  const servicesTotal = selectedServices.reduce((sum, s) => sum + s.price, 0);

  // Hàm xử lý khi bấm Tiếp tục
  const handleNextStep = () => {
    console.log("Dịch vụ đã chọn:", selectedServices);
    navigate('/checkout'); // Chuyển sang trang thanh toán
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6 pt-28 selection:bg-blue-500">
      <div className="max-w-7xl mx-auto">
        
        {/* Tiêu đề trang */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-2">
             <span className="bg-blue-600 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-widest text-white">Bước 02</span>
             <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter">DỊCH VỤ BỔ SUNG</h1>
          </div>
          <p className="text-blue-300/40 uppercase tracking-[0.3em] text-sm font-medium ml-1">Tăng thêm sự thoải mái cho hành trình của bạn</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* DANH SÁCH DỊCH VỤ - GRID 2 CỘT */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 h-fit">
            {services.map(service => {
              const isSelected = selectedServices.find(s => s.id === service.id);
              return (
                <div 
                  key={service.id}
                  onClick={() => toggleService(service)}
                  className={`p-8 rounded-[2.5rem] border-2 transition-all duration-500 cursor-pointer group relative overflow-hidden ${
                    isSelected 
                    ? 'border-yellow-400 bg-yellow-400/10 shadow-[0_0_30px_rgba(250,204,21,0.15)]' 
                    : 'border-white/5 bg-white/5 hover:border-blue-500/50 hover:bg-white/10'
                  }`}
                >
                  {/* Hiệu ứng tia sáng khi chọn */}
                  {isSelected && <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-400/20 blur-3xl rounded-full"></div>}
                  
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
                  <h3 className={`text-xl font-bold mb-2 ${isSelected ? 'text-yellow-400' : 'text-white'}`}>{service.name}</h3>
                  <p className="text-blue-300/30 text-xs mb-6 uppercase tracking-widest font-bold">Dành cho: 1 hành khách</p>
                  
                  <div className="flex justify-between items-end">
                    <p className="text-2xl font-black tracking-tighter">
                      +{service.price.toLocaleString()} <span className="text-xs font-normal opacity-50">VND</span>
                    </p>
                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${isSelected ? 'bg-yellow-400 border-yellow-400 text-slate-900' : 'border-white/20'}`}>
                      {isSelected ? '✓' : '+'}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* TỔNG KẾT TẠM TÍNH (STICKY SIDEBAR) */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-10 rounded-[3rem] sticky top-28 shadow-2xl overflow-hidden">
              {/* Decor nền */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-600/10 blur-[80px] rounded-full"></div>
              
              <h2 className="text-2xl font-black mb-8 border-b border-white/10 pb-6 italic text-blue-400 uppercase tracking-tighter">Tóm tắt dịch vụ</h2>
              
              <div className="space-y-5 mb-10 min-h-[150px]">
                <div className="flex justify-between text-sm">
                  <span className="text-blue-300/50 font-medium">Giá vé cơ bản:</span>
                  <span className="font-bold tracking-tight">{basePrice.toLocaleString()} VND</span>
                </div>
                
                {selectedServices.length > 0 ? (
                  selectedServices.map(s => (
                    <div key={s.id} className="flex justify-between text-sm animate-fade-in">
                      <span className="text-blue-300/50 italic">{s.name}:</span>
                      <span className="text-green-400 font-bold">+{s.price.toLocaleString()} VND</span>
                    </div>
                  ))
                ) : (
                  <p className="text-[10px] text-blue-200/20 uppercase tracking-widest text-center py-10 border border-dashed border-white/5 rounded-2xl">Chưa chọn thêm dịch vụ</p>
                )}
              </div>

              <div className="border-t border-white/10 pt-8 mb-10">
                <div className="flex justify-between items-end">
                  <span className="text-sm font-black text-blue-400 uppercase">Tổng cộng:</span>
                  <div className="text-right">
                    <span className="text-4xl font-black text-yellow-400 tracking-tighter block">
                      {(basePrice + servicesTotal).toLocaleString()}
                    </span>
                    <span className="text-xs text-white/30 uppercase">VNĐ (Đã bao gồm VAT)</span>
                  </div>
                </div>
              </div>

              <button 
                onClick={handleNextStep}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-5 rounded-2xl transition-all shadow-xl shadow-blue-900/40 uppercase tracking-[0.2em] hover:scale-[1.02] active:scale-95"
              >
                Tiếp tục thanh toán
              </button>
              
              <p className="mt-6 text-[10px] text-center text-blue-200/30 font-medium uppercase tracking-tighter leading-relaxed">
                Hủy dịch vụ tối thiểu 24h trước giờ khởi hành.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSelection;
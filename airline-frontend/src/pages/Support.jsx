import React, { useState, useEffect, useRef } from 'react';

const Support = () => {
  // --- States cho Gửi Ticket ---
  const [ticketSubject, setTicketSubject] = useState('');
  const [ticketMessage, setTicketMessage] = useState('');

  // --- States cho AI Chatbot ---
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Xin chào Quang! Tôi là SkyAI. Tôi có thể giúp gì cho hành trình của bạn hôm nay?' }
  ]);
  const chatEndRef = useRef(null);

  // Tự động cuộn xuống khi có tin nhắn mới
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg = { role: 'user', text: chatInput };
    setMessages(prev => [...prev, userMsg]);
    setChatInput('');

    // Giả lập bot phản hồi (Sau này kết nối với Laravel CHATBOT_HISTORY)
    setTimeout(() => {
      const botMsg = { role: 'bot', text: `SkyAI đã nhận được thông tin: "${chatInput}". Tôi đang kiểm tra hệ thống, vui lòng đợi trong giây lát.` };
      setMessages(prev => [...prev, botMsg]);
    }, 800);
  };

  const handleSubmitTicket = (e) => {
    e.preventDefault();
    alert(`Yêu cầu về "${ticketSubject}" đã được gửi!`);
  };

  const faqCategories = [
    { title: "Quản lý đặt vé", icon: "🎫", desc: "Đổi hành trình, hoàn vé." },
    { title: "Hành lý & Thủ tục", icon: "🧳", desc: "Quy định cân nặng, check-in online." },
    { title: "Dịch vụ trên chuyến", icon: "🍽️", desc: "Suất ăn, chỗ ngồi, wifi." },
    { title: "Thành viên Skylink", icon: "💎", desc: "Tích điểm, nâng hạng thẻ." }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6 pt-24 selection:bg-blue-500 selection:text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* HERO SUPPORT */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black italic mb-4 tracking-tighter">TRUNG TÂM TRỢ GIÚP</h1>
          <p className="text-blue-300/60 uppercase tracking-[0.3em] text-sm font-bold mb-8">Giải đáp mọi thắc mắc của bạn 24/7</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* [NEW] AI CHATBOT DASHBOARD - CHIẾM 2 CỘT */}
          <div className="lg:col-span-2 bg-white/5 border border-blue-500/20 rounded-[3rem] overflow-hidden flex flex-col h-[550px] shadow-2xl backdrop-blur-xl">
            <div className="bg-blue-600/20 border-b border-white/10 p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_#4ade80]"></div>
                <h3 className="font-bold text-blue-400 italic tracking-widest uppercase text-sm">SkyAI Assistant</h3>
              </div>
              <span className="text-[10px] text-blue-200/40 uppercase">Dữ liệu thời gian thực</span>
            </div>

            {/* Khung chat */}
            <div className="flex-1 overflow-y-auto p-8 space-y-6 scrollbar-hide">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-br-none' 
                    : 'bg-white/10 text-blue-100 rounded-bl-none border border-white/10'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Input gửi chat */}
            <form onSubmit={handleSendMessage} className="p-4 bg-slate-800/50 border-t border-white/10 flex gap-3">
              <input 
                type="text" 
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Hỏi SkyAI bất cứ điều gì..."
                className="flex-1 bg-white/5 border border-white/10 px-6 py-3 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-2xl font-black transition-all">GỬI</button>
            </form>
          </div>

          {/* FORM GỬI TICKET - CHIẾM 1 CỘT */}
          <div className="lg:col-span-1 bg-white/5 border border-white/10 p-8 rounded-[3rem] backdrop-blur-xl">
            <h2 className="text-2xl font-bold mb-6 italic text-yellow-400">Gửi yêu cầu</h2>
            <form onSubmit={handleSubmitTicket} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-blue-400 uppercase tracking-widest ml-1">Chủ đề</label>
                <select className="w-full bg-slate-800 border border-white/10 p-4 rounded-xl outline-none mt-2"
                  value={ticketSubject} onChange={(e) => setTicketSubject(e.target.value)} required>
                  <option value="">Chọn vấn đề...</option>
                  <option value="Booking">Vấn đề đặt vé</option>
                  <option value="Payment">Thanh toán</option>
                  <option value="Refund">Hoàn tiền</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-bold text-blue-400 uppercase tracking-widest ml-1">Chi tiết</label>
                <textarea rows="3" placeholder="Mô tả sự cố..."
                  className="w-full bg-slate-800 border border-white/10 p-4 rounded-xl outline-none mt-2 resize-none"
                  value={ticketMessage} onChange={(e) => setTicketMessage(e.target.value)} required />
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-4 rounded-xl transition-all shadow-lg shadow-blue-900/40">GỬI TICKET</button>
            </form>
          </div>
        </div>

        {/* CÁC DANH MỤC FAQ & HOTLINE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {faqCategories.map((cat, index) => (
            <div key={index} className="bg-white/5 border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-all cursor-pointer group">
              <div className="text-3xl mb-4">{cat.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-blue-400">{cat.title}</h3>
              <p className="text-blue-200/50 text-xs leading-relaxed">{cat.desc}</p>
            </div>
          ))}
        </div>

        {/* HOTLINE GẤP */}
        <div className="bg-gradient-to-r from-blue-600/20 to-cyan-500/20 border border-blue-500/30 p-8 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold italic">BẠN CẦN GẶP NHÂN VIÊN?</h3>
            <p className="text-blue-200/60">Hotline hỗ trợ khẩn cấp 24/7 dành cho hành khách</p>
          </div>
          <div className="text-4xl font-black text-yellow-400 tracking-tighter">1900 8888</div>
        </div>

      </div>
    </div>
  );
};

export default Support;
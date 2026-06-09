import { useState } from 'react';

const LoginPage = () => {
  // State giả lập để xử lý form
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Đang đăng nhập với: ${loginEmail}`);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    alert("Chuyển hướng xử lý Đăng ký!");
  };

  return (
    // Background Cinematic: Dùng link ảnh sân bay hoàng hôn làm nền
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-4 relative"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop')" }}
    >
      {/* Lớp phủ màu tối (Overlay) để làm nổi bật cái form kính mờ */}
      <div className="absolute inset-0 bg-slate-900/50"></div>

      {/* Container chính: Hiệu ứng Kính mờ (Glassmorphism) */}
      <div className="relative z-10 w-full max-w-5xl bg-white/10 backdrop-blur-lg border border-white/20 p-8 md:p-12 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)] flex flex-col md:flex-row gap-8">
        
        {/* Phần bên trái: ĐĂNG NHẬP (Tông màu Xanh Teal/Blue) */}
        <div className="flex-1 flex flex-col justify-center p-8 bg-slate-800/40 rounded-2xl border border-cyan-500/30 hover:bg-slate-800/60 hover:border-cyan-400/50 transition-all duration-300">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-white mb-2 tracking-wider drop-shadow-md">WELCOME BACK</h2>
            <p className="text-cyan-200 text-sm">Unlock and Manage Your Airline Operations</p>
          </div>
          
          <form onSubmit={handleLogin} className="w-full space-y-5">
            <input 
              type="email" 
              placeholder="Email Address" 
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-cyan-100/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all" 
              required
            />
            <input 
              type="password" 
              placeholder="Password" 
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-cyan-100/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all" 
              required
            />
            <button 
              type="submit"
              className="w-full mt-6 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-4 px-4 rounded-xl shadow-lg transform hover:-translate-y-1 hover:shadow-cyan-500/30 transition-all duration-300"
            >
              ACCESS YOUR CONTROL PANEL
            </button>
            <div className="text-center mt-4">
              <a href="#" className="text-sm text-cyan-300 hover:text-white transition-colors">Forgot Password?</a>
            </div>
          </form>
        </div>

        {/* Đường gạch giữa cho đẹp (chỉ hiện trên màn hình to) */}
        <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>

        {/* Phần bên phải: ĐĂNG KÝ (Tông màu Vàng/Cam) */}
        <div className="flex-1 flex flex-col justify-center p-8 bg-amber-900/30 rounded-2xl border border-amber-500/30 hover:bg-amber-900/50 hover:border-amber-400/50 transition-all duration-300">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-amber-400 mb-2 tracking-wider drop-shadow-md">NEW TO SKYLINK?</h2>
            <p className="text-amber-200/80 text-sm">Explore Aviation Roles and Join Our Network</p>
          </div>
          
          <form onSubmit={handleRegister} className="w-full space-y-5">
            <input 
              type="text" 
              placeholder="Full Name" 
              className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-amber-100/50 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all" 
              required
            />
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-amber-100/50 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all" 
              required
            />
            <input 
              type="password" 
              placeholder="Create Password" 
              className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-amber-100/50 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all" 
              required
            />
            <button 
              type="submit"
              className="w-full mt-6 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-bold py-4 px-4 rounded-xl shadow-lg transform hover:-translate-y-1 hover:shadow-amber-500/30 transition-all duration-300"
            >
              LAUNCH YOUR CAREER
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;
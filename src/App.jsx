import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import FlightResults from './pages/FlightResults';
import ServiceSelection from './pages/ServiceSelection';
import Promotions from './pages/Promotions';
import Support from './pages/Support';
import Checkout from './pages/Checkout';

function App() {
  return (
    <BrowserRouter>
     
<Routes>
  
  <Route path="/" element={<HomePage />} /> 
  <Route path="/login" element={<LoginPage />} />
  <Route path="/flights" element={<FlightResults />} />
  <Route path="/services" element={<ServiceSelection />} />
  <Route path="/promotions" element={<Promotions />} />
  <Route path="/support" element={<Support />} />
  <Route path="/checkout" element={<Checkout />} />
</Routes>
    </BrowserRouter>
  );
}

export default App;
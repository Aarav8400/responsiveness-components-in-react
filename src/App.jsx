import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Pricing from './pages/Pricing';
import Navbar from './component/Navbar';

import About from './pages/About';
import Home from './pages/Home';


function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Your Navbar component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/pricing' element={<Pricing />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

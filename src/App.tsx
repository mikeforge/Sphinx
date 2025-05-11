import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Lore from './pages/Lore';
import Products from './pages/Products';
import Header from './components/Header';

import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <div style={{ padding: '64px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/lore" element={<Lore />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

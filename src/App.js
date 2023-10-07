import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home.js';
import Detalle from './pages/Detalle';
import NavBar from './components/NavBar.js';





function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <NavBar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id/" element={<Detalle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

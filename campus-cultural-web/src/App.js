import React from 'react';
import Loginscreen from './tela-login/loginscreen';
import CreateEvent from './telas-evento/cadastrarEvento';
import Eventos from './telas-evento/eventos';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginscreen />} />
        <Route path="/cadastrar-evento" element={<CreateEvent />} />
        <Route path="/eventos" element={<Eventos />} />
      </Routes>
    </Router>
  );
}

export default App;

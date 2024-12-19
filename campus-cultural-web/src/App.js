import React from 'react';
import Loginscreen from './tela-login/loginscreen';
import CreateEvent from './telas-evento/cadastrarEvento';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginscreen />} /> {/* Página inicial */}
        <Route path="/cadastrar-evento" element={<CreateEvent />} /> {/* Página de cadastro de evento */}
      </Routes>
    </Router>
  );
}


export default App;

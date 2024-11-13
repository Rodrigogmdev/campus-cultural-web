// tela de cadastro
import React, { useState } from 'react';

function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.endsWith('@utfpr.edu.br')) {
      setError('Por favor, use seu email institucional (@utfpr.edu.br).');
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Cadastro</h2>
      <input
        type="text"
        placeholder="Nome completo"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email institucional (@utfpr.edu.br)"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default RegisterForm;
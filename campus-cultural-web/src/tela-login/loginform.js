// tela de login
import React, { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [warning, setWarning] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.endsWith('@utfpr.edu.br')) {
      setWarning('Lembre-se de usar seu email institucional (@utfpr.edu.br).');
    } else {
      setWarning('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {warning && <p style={{ color: 'orange' }}>{warning}</p>}
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Entrar</button>
    </form>
  );
}

export default LoginForm;


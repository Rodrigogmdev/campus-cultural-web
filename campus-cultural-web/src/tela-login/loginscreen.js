import React, { useState } from 'react';
import LoginForm from './loginform';
import RegisterForm from './registerform';
import logo from '../assets/logo.png';
function Loginscreen() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="loginscreen">
      <img src={logo} alt="Campos Cultural" />
      {isLogin ? (
        <>
          <LoginForm />
          <button onClick={toggleForm}>Cadastre-se</button>
        </>
      ) : (
        <>
          <RegisterForm />
          <button onClick={toggleForm}>Faça login</button>
        </>
      )}
    </div>
  );
}

export default Loginscreen;

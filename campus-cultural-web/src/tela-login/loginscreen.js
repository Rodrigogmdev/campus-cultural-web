import React, { useState } from 'react';
import LoginForm from './loginform';
import RegisterForm from './registerform';
import logo from '../assets/logo.png';
import './loginscreen.css'; 

function Loginscreen() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="loginscreen">
      <header>
        <div className="vertical-text">
          Campus
          <br />
          Cultural
        </div>
      </header>
      <img src={logo} alt="Campus Cultural" className="logo" />
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
import React, { useState } from 'react';
import api from '../api';
import logo from '../assets/logo.png';
import './cadastroEvento.css'

function CreateEvent() {
  const [eventData, setEventData] = useState({
    name: '',
    description: '',
    date: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Faz a requisição para cadastrar o evento
      const response = await api.post('/evento', eventData);
      console.log('Evento cadastrado com sucesso:', response.data);
      setSuccessMessage('Evento cadastrado com sucesso!');
      setErrorMessage('');
      setEventData({ name: '', description: '', date: '' }); // Reseta o formulário
    } catch (error) {
      console.error('Erro ao cadastrar evento:', error);
      setErrorMessage(error.response?.data?.message || 'Erro ao cadastrar evento.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="create-event-screen">
      <header>
        <div className="vertical-text">
          Campus
          <br />
          Cultural
        </div>
      </header>
      <img src={logo} alt="Campus Cultural" className="logo" />
      <form onSubmit={handleSubmit}>
        <h2>Novo Evento</h2>
        <input
          type="text"
          name="name"
          placeholder="Nome do Evento"
          value={eventData.name}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="description"
          placeholder="Descrição do Evento"
          value={eventData.description}
          onChange={handleInputChange}
          required
        ></textarea>
        <input
          type="date"
          name="date"
          value={eventData.date}
          onChange={handleInputChange}
          required
        />
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default CreateEvent;

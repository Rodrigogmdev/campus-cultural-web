import React, { useEffect, useState } from 'react';
import { getEvents } from '../api'; // Função para buscar eventos na API
import './eventos.css';

function Eventos() {
  const [events, setEvents] = useState([]);
  const [expandedEvent, setExpandedEvent] = useState(null); // Controla qual evento está expandido

  useEffect(() => {
    async function fetchEvents() {
      try {
        const data = await getEvents(); // Busca os eventos na API
        setEvents(data);
      } catch (error) {
        console.error('Erro ao buscar eventos:', error);
      }
    }
    fetchEvents();
  }, []);

  // Alterna a visibilidade do evento expandido
  const toggleExpand = (eventId) => {
    setExpandedEvent(expandedEvent === eventId ? null : eventId);
  };

  return (
    <div className="eventos-screen">
      <header>
        <div className="vertical-text">Campus<br />Cultural</div>
      </header>
      <h1 className="titulo">Eventos Cadastrados</h1>
      <div className="eventos-container">
        {events.map(event => (
          <div 
            key={event.id} 
            className={`evento-item ${expandedEvent === event.id ? 'expandido' : ''}`} 
            onClick={() => toggleExpand(event.id)}
          >
            <h2>{event.name}</h2>
            <div className="evento-content">
              <img src={event.imageUrl || '/default-event.jpg'} alt={event.name} className="evento-img" />
              <p className="evento-resumo">{event.description}</p>
            </div>
            
            {expandedEvent === event.id && (
              <div className="evento-detalhes">
                <p><strong>Data:</strong> {event.date}</p>
                <p><strong>Horas complementares:</strong> {event.hours} horas</p>
                <p><strong>Organizador:</strong> {event.organizer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Eventos;

import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import DateCarousel from '../../components/DateCarousel/DateCarousel';
import TimeSlotGrid from '../../components/TimeSlotGrid/TimeSlotGrid';
import './Agendamento.css';

const Agendamento = () => {
  // Inicializa com a data de hoje (exemplo)
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const { handleBookSlot } = useOutletContext(); 

  // Efeito opcional: Scroll to top ao trocar data
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedDate]);

  return (
    <div className="agendamento-container">
      {/* Header Simples (Opcional, mas bom para contexto) */}
      <header style={{ padding: '0 8px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: '800', color: '#0f172a', margin: 0 }}>
          Agendar Horário
        </h1>
        <p style={{ color: '#64748b', fontSize: '14px', margin: '4px 0 0 0' }}>
          Selecione o dia e a quadra de sua preferência.
        </p>
      </header>

      {/* Seção de Data - Agora Sticky! */}
      <section className="date-carousel-section">
        <div className="section-header">
          <h2 className="section-title">Novembro 2025</h2> {/* Dica: Tornar dinâmico com a data selecionada */}
        </div>
        <DateCarousel selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      </section>

      {/* Seção de Slots */}
      <section className="timeslot-section">
        <TimeSlotGrid 
            selectedDate={selectedDate} // Passar a data para filtrar slots
            onBookSlot={handleBookSlot} 
        />
      </section>
    </div>
  );
};

export default Agendamento;
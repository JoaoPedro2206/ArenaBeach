import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import DateCarousel from '../../components/DateCarousel/DateCarousel';
import TimeSlotGrid from '../../components/TimeSlotGrid/TimeSlotGrid';
import BookingModal from '../../components/BookingModel/BookingModal'; // Certifique-se que o import está aqui
import './Agendamento.css';

// Função para formatar o nome do mês dinamicamente
const getMonthName = (dateString) => {
  const date = new Date(dateString + 'T12:00:00'); // Adiciona hora para evitar problemas de fuso
  return date.toLocaleString('pt-BR', { month: 'long' });
};

// NOVA FUNÇÃO: Formata a data completa para exibição
const formatSelectedDate = (dateString) => {
  const date = new Date(dateString + 'T12:00:00');
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formatted = date.toLocaleDateString('pt-BR', options);
  // Capitaliza a primeira letra do dia da semana
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
};

const Agendamento = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const { handleBookSlot: confirmBooking } = useOutletContext();

  // Efeito para scroll suave ao carregar a página
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // 2. Simula o carregamento ao mudar a data
  useEffect(() => {
    setIsLoading(true);
    // Simula uma pequena espera (como uma chamada de API)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300); // 300ms de espera

    return () => clearTimeout(timer); // Limpa o timer se o componente for desmontado
  }, [selectedDate]);

  const handleOpenModal = (slot) => {
    setSelectedSlot(slot);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSlot(null);
  };

  const handleConfirmBooking = () => {
    if (selectedSlot) {
      confirmBooking({ ...selectedSlot, date: selectedDate });
      handleCloseModal();
    }
  };

  return (
    <div className="agendamento-container">
      {/* Cabeçalho da Página */}
      <header className="agendamento-header">
        <h1 className="agendamento-title">Agendar Horário</h1>
        <p className="agendamento-subtitle">
          Selecione o dia e a quadra de sua preferência.
        </p>
      </header>

      {/* Seção de Data (Sticky) */}
      <section className="date-carousel-section">
        <div className="section-header">
          {/* Título do mês agora é dinâmico */}
          <h2 className="section-title">
            {getMonthName(selectedDate)}
          </h2>
        </div>
        <DateCarousel selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      </section>

      {/* Seção de Horários */}
      <section className={`timeslot-section ${isLoading ? 'loading' : ''}`}>
        {/* ADICIONADO: Subtítulo com a data selecionada */}
        <div className="timeslot-header">
          <h3 className="timeslot-section-title">Horários Disponíveis</h3>
          <p className="timeslot-section-subtitle">{formatSelectedDate(selectedDate)}</p>
        </div>
        <TimeSlotGrid 
            selectedDate={selectedDate}
            onBookSlot={handleOpenModal} 
        />
      </section>

      {/* Modal de Reserva */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmBooking}
        slot={selectedSlot} /* MUDANÇA: Passa o objeto 'slot' inteiro */
        selectedDate={selectedDate}
      />
    </div>
  );
};

export default Agendamento;
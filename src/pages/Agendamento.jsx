import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import DateCarousel from '../components/DateCarousel';
import TimeSlotGrid from '../components/TimeSlotGrid';

const Agendamento = () => {
  const [selectedDate, setSelectedDate] = useState('2025-10-27');
  
  // Recebe a função do Layout
  const { handleBookSlot } = useOutletContext(); 

  return (
    <div className="page-container">
      <DateCarousel selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <TimeSlotGrid onBookSlot={handleBookSlot} />
    </div>
  );
};

export default Agendamento;
import { useState } from 'react'; // Precisamos do useState
import TimeSlot from './TimeSlot';

// --- NOSSOS NOVOS DADOS ---
// Movi os dados para fora do componente e criei duas listas
// (Note que mudei alguns status da "Descoberta" para ficar diferente)

const cobertaSlots = [
  { time: '05:00 - 06:00', price: 'R$ 80,00', status: 'available' },
  { time: '06:00 - 07:00', price: 'R$ 80,00', status: 'available' },
  { time: '07:00 - 08:00', price: 'R$ 80,00', status: 'available' },
  { time: '08:00 - 09:00', price: 'R$ 80,00', status: 'available' },
  { time: '09:00 - 10:00', price: 'R$ 80,00', status: 'reserved' },
  { time: '10:00 - 11:00', price: 'R$ 80,00', status: 'class' },
  { time: '11:00 - 12:00', price: 'R$ 80,00', status: 'available' },
  { time: '14:00 - 15:00', price: 'R$ 90,00', status: 'my-booking' },
  { time: '15:00 - 16:00', price: 'R$ 90,00', status: 'available' },
  { time: '16:00 - 17:00', price: 'R$ 90,00', status: 'available' },
  { time: '17:00 - 18:00', price: 'R$ 90,00', status: 'available' },
  { time: '18:00 - 19:00', price: 'R$ 90,00', status: 'available' },
  { time: '19:00 - 20:00', price: 'R$ 90,00', status: 'available' },
  { time: '20:00 - 21:00', price: 'R$ 90,00', status: 'available' },
  { time: '21:00 - 22:00', price: 'R$ 90,00', status: 'available' },
  { time: '22:00 - 23:00', price: 'R$ 90,00', status: 'available' }
];

const descobertaSlots = [
  { time: '05:00 - 06:00', price: 'R$ 70,00', status: 'available' },
  { time: '06:00 - 07:00', price: 'R$ 70,00', status: 'available' },
  { time: '07:00 - 08:00', price: 'R$ 70,00', status: 'reserved' },
  { time: '08:00 - 09:00', price: 'R$ 70,00', status: 'available' },
  { time: '09:00 - 10:00', price: 'R$ 70,00', status: 'available' },
  { time: '10:00 - 11:00', price: 'R$ 70,00', status: 'class' },
  { time: '11:00 - 12:00', price: 'R$ 70,00', status: 'reserved' },
  { time: '14:00 - 15:00', price: 'R$ 80,00', status: 'available' },
  { time: '15:00 - 16:00', price: 'R$ 80,00', status: 'available' },
  { time: '16:00 - 17:00', price: 'R$ 80,00', status: 'my-booking' },
  { time: '17:00 - 18:00', price: 'R$ 80,00', status: 'available' },
  { time: '18:00 - 19:00', price: 'R$ 80,00', status: 'reserved' },
  { time: '19:00 - 20:00', price: 'R$ 80,00', status: 'available' },
  { time: '20:00 - 21:00', price: 'R$ 80,00', status: 'available' },
  { time: '21:00 - 22:00', price: 'R$ 80,00', status: 'available' },
  { time: '22:00 - 23:00', price: 'R$ 80,00', status: 'available' }
];


const TimeSlotGrid = ({ onBookSlot }) => {
  // 1. Estado para controlar a aba selecionada ('coberta' ou 'descoberta')
  const [selectedCourt, setSelectedCourt] = useState('coberta');

  // 2. Determina qual lista de horários e qual nome de quadra usar
  const slotsToDisplay = selectedCourt === 'coberta' ? cobertaSlots : descobertaSlots;
  const courtName = selectedCourt === 'coberta' ? 'Quadra Coberta' : 'Quadra Descoberta';

  return (
    <div className="timeslot-grid-container">
      
      {/* 3. Abas para selecionar a quadra */}
      <h3 className="timeslot-grid-title">Selecione a quadra</h3>
      <div className="court-tabs">
        <button
          className={`court-tab-btn ${selectedCourt === 'coberta' ? 'active' : ''}`}
          onClick={() => setSelectedCourt('coberta')}
        >
          Quadra Coberta
        </button>
        <button
          className={`court-tab-btn ${selectedCourt === 'descoberta' ? 'active' : ''}`}
          onClick={() => setSelectedCourt('descoberta')}
        >
          Quadra Descoberta
        </button>
      </div>

      <h3 className="timeslot-grid-title">Horários disponíveis</h3>
      <div className="timeslot-grid">
        {slotsToDisplay.map((slot) => (
          <TimeSlot
            key={slot.time} // Use o tempo como key (assumindo que é único por lista)
            time={slot.time}
            price={slot.price}
            status={slot.status}
            // 4. Passa o nome da quadra junto com os outros dados
            onBook={() => onBookSlot(slot.time, slot.price, courtName)}
          />
        ))}
      </div>
    </div>
  );
};

export default TimeSlotGrid;
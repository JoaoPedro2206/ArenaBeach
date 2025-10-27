const TimeSlot = ({ time, price, status, onBook }) => {
  
  // Mapeia o status para a classe CSS
  const getSlotClass = () => {
    const statusClassMap = {
      available: 'timeslot-available',
      reserved: 'timeslot-reserved',
      class: 'timeslot-class',
      'my-booking': 'timeslot-my-booking',
    };
    return `timeslot ${statusClassMap[status] || ''}`;
  };

  const getStatusText = () => {
    switch (status) {
      case 'available':
        return price;
      case 'reserved':
        return 'Reservado';
      case 'class':
        return 'Aula';
      case 'my-booking':
        return 'Minha Reserva';
      default:
        return '';
    }
  };

  const handleClick = () => {
    if (status === 'available' && onBook) {
      onBook(time, price);
    }
  };

  return (
    <button
      className={getSlotClass()}
      onClick={handleClick}
      disabled={status === 'reserved' || status === 'class'}
    >
      <div className="timeslot-info">
        <div className="timeslot-indicator"></div>
        <span className="timeslot-time">{time}</span>
      </div>
      <div className="timeslot-price">
        {getStatusText()}
      </div>
    </button>
  );
};

export default TimeSlot;
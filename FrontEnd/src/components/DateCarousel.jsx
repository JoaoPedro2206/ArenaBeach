import { useState, useEffect } from 'react'; 

const generateDates = () => {
  const dates = [];
  const today = new Date();
  
  const dayFormatter = new Intl.DateTimeFormat('pt-BR', { weekday: 'short' });
  const monthFormatter = new Intl.DateTimeFormat('pt-BR', { month: 'short' });

  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(today);
    currentDate.setDate(today.getDate() + i);

    const day = dayFormatter.format(currentDate).replace('.', '').toUpperCase();
    const date = currentDate.getDate();
    const month = monthFormatter.format(currentDate).replace('.', '').toUpperCase();

    const id = currentDate.toISOString().split('T')[0];

    dates.push({ day, date, month, id });
  }
  return dates;
};


const DateCarousel = ({ selectedDate, setSelectedDate }) => {
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const generatedDates = generateDates();
    setDates(generatedDates);

    if (!selectedDate && generatedDates.length > 0) {
      setSelectedDate(generatedDates[0].id);
    }
  }, []);

  if (dates.length === 0) {
    return (
      <div className="date-carousel-container">
        <h2 className="date-carousel-title">Selecione o dia</h2>
        <div className="date-carousel">
          <p>Carregando datas...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="date-carousel-container">
      <h2 className="date-carousel-title">Selecione o dia</h2>
      <div className="date-carousel">
        {dates.map((dateItem) => (
          <button
            key={dateItem.id} // A key agora é única (ex: "2025-10-27")
            className={`date-item ${selectedDate === dateItem.id ? 'selected' : ''}`}
            onClick={() => setSelectedDate(dateItem.id)}
          >
            <div className="date-item-day">
              {dateItem.day}
            </div>
            <div className="date-item-date">
              {dateItem.date}
            </div>
            <div className="date-item-month">
              {dateItem.month}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DateCarousel;
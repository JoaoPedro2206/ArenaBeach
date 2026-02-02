const Aulas = () => {
  const instructors = [
    { name: 'Carlos Silva', specialty: 'Técnica Avançada', price: 'R$ 120/h' },
    { name: 'Ana Costa', specialty: 'Iniciantes', price: 'R$ 100/h' },
    { name: 'Pedro Santos', specialty: 'Clínica de Saque', price: 'R$ 80/h' }
  ];

  return (
    <div className="page-container">
      <h2 className="page-title">Aulas Disponíveis</h2>
      <div className="instructors-list">
        {instructors.map((instructor, index) => (
          <div key={index} className="instructor-card">
            <div className="instructor-card-content">
              <div className="instructor-avatar"></div>
              <div className="instructor-info">
                <h3 className="instructor-name">{instructor.name}</h3>
                <p className="instructor-specialty">{instructor.specialty}</p>
                <p className="instructor-price">{instructor.price}</p>
              </div>
              <button className="instructor-book-btn">
                Agendar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aulas;
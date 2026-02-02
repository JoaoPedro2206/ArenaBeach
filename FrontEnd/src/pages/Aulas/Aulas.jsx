import './Aulas.css';

const Aulas = () => {
  const instructors = [
    { name: 'Carlos Silva', specialty: 'Técnica Avançada', price: 'R$ 120/h' },
    { name: 'Ana Costa', specialty: 'Iniciantes', price: 'R$ 100/h' },
    { name: 'Pedro Santos', specialty: 'Clínica de Saque', price: 'R$ 80/h' }
  ];

  return (
    <div className="aulas-container">
      <header className="aulas-header">
        <h1 className="aulas-title">Nossos Professores</h1>
        <p className="aulas-subtitle">
          Escolha um especialista para aprimorar seu jogo e agende uma aula particular.
        </p>
      </header>

      <div className="instructors-list">
        {instructors.map((instructor, index) => (
          <div key={index} className="instructor-card">
            <div className="instructor-avatar" style={{backgroundImage: `url(https://avatar.iran.liara.run/public/${index})`}}></div>
            <div className="instructor-info">
              <h3 className="instructor-name">{instructor.name}</h3>
              <p className="instructor-specialty">{instructor.specialty}</p>
              <p className="instructor-price">{instructor.price}</p>
            </div>
            <button className="instructor-book-btn">
              Agendar Aula
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aulas;
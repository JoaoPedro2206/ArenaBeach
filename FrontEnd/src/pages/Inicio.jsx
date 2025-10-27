import { useNavigate } from 'react-router-dom';

const Inicio = () => {
  const navigate = useNavigate();

  // Função para obter a data atual formatada
  const getCurrentDate = () => {
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const date = new Date().toLocaleDateString('pt-BR', options);
    // Capitaliza a primeira letra do dia e do mês
    return date.replace(/\b\w/g, l => l.toUpperCase());
  };

  const upcomingActivities = [
    {
      id: 'match-today',
      title: 'Reserva · Quadra Coberta',
      description: 'Jogo com equipe Arena',
      dateLabel: 'Hoje',
      time: '14:00 - 15:00',
      location: 'Quadra Descoberta',
      icon: '🎾',
      type: 'reserva',
    },
    {
      id: 'lesson-tomorrow',
      title: 'Aula com Prof. Marina',
      description: 'Treino de saque e estratégia',
      dateLabel: 'Amanhã',
      time: '09:30 - 10:30',
      location: 'Quadra Coberta',
      icon: '👩‍🏫',
      type: 'aula',
    },
    {
      id: 'match-weekend',
      title: 'Reserva · Quadra 04',
      description: 'Dupla com Lucas e Ana',
      dateLabel: 'Sábado',
      time: '18:00 - 19:30',
      location: 'Quadra Coberta',
      icon: '🎾',
      type: 'reserva',
    },
  ];

  return (
    <div className="page-container-inicio inicio-page">
      <section className="inicio-hero-card">
        <div className="inicio-hero-text">
          <span className="inicio-hero-pill">Arena Beach Experience</span>
          <h1 className="inicio-hero-title">Olá, Joao!</h1>
          <p className="inicio-hero-date">{getCurrentDate()}</p>
          <div className="inicio-hero-highlights">
            <span className="inicio-highlight-chip">12 reservas ativas</span>
            <span className="inicio-highlight-chip">2 aulas esta semana</span>
          </div>
        </div>
        <button
          type="button"
          className="inicio-hero-button"
          onClick={() => navigate('/agendamento')}
        >
          Agendar nova partida
        </button>
      </section>

      <section className="inicio-content-grid">

        <article className="inicio-card inicio-activities-card">
          <div className="inicio-card-header">
            <h3 className="section-title">Próximas atividades</h3>
            <button
              type="button"
              className="inicio-card-cta"
              onClick={() => navigate('/agendamento')}
            >
              Ver agenda completa
            </button>
          </div>

          <div className="inicio-activities-list">
            {upcomingActivities.map((activity) => (
              <div key={activity.id} className="inicio-activity-item">
                <div className="inicio-activity-icon">{activity.icon}</div>

                <div className="inicio-activity-info">
                  <div className="inicio-activity-row">
                    <span className="inicio-activity-title">{activity.title}</span>
                    <span className={`inicio-activity-badge ${activity.type}`}>
                      {activity.type === 'reserva' ? 'Partida' : 'Aula'}
                    </span>
                  </div>
                  <p className="inicio-activity-description">{activity.description}</p>
                  <div className="inicio-activity-meta">
                    <span className="inicio-activity-time">
                      {activity.dateLabel} · {activity.time}
                    </span>
                    <span className="inicio-activity-location">{activity.location}</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="inicio-activity-action"
                  onClick={() => navigate('/agendamento')}
                >
                  Detalhes
                </button>
              </div>
            ))}
          </div>
        </article>

        <article className="inicio-card">
          <h3 className="section-title">Acesso Rápido</h3>
          <div className="inicio-quick-access">
            <button
              className="inicio-quick-card primary"
              onClick={() => navigate('/agendamento')}
            >
              <div className="inicio-quick-icon primary">📅</div>
              <div className="inicio-quick-content">
                <h4 className="inicio-quick-title">Agendar Agora</h4>
                <p className="inicio-quick-subtitle">
                  Reserve sua quadra rapidamente
                </p>
              </div>
            </button>

            <button
              className="inicio-quick-card secondary"
              onClick={() => navigate('/aulas')}
            >
              <div className="inicio-quick-icon secondary">🧑‍🏫</div>
              <div className="inicio-quick-content">
                <h4 className="inicio-quick-title">Marcar Aula</h4>
                <p className="inicio-quick-subtitle">
                  Treine com nossos professores
                </p>
              </div>
            </button>
          </div>
        </article>

        <article className="inicio-card">
          <h3 className="section-title">Entre em Contato</h3>
          <div className="inicio-quick-access">
            <a
              href="https://wa.me/5561999998888"
              target="_blank"
              rel="noopener noreferrer"
              className="inicio-quick-card contact"
            >
              <div className="inicio-quick-icon contact">💬</div>
              <div className="inicio-quick-content">
                <h4 className="inicio-quick-title">WhatsApp</h4>
                <p className="inicio-quick-subtitle">
                  Fale conosco pelo chat
                </p>
              </div>
            </a>
            <a
              href="mailto:contato@arenabeach.com"
              className="inicio-quick-card contact"
            >
              <div className="inicio-quick-icon contact">✉️</div>
              <div className="inicio-quick-content">
                <h4 className="inicio-quick-title">Email</h4>
                <p className="inicio-quick-subtitle">
                  Envie sua mensagem
                </p>
              </div>
            </a>
          </div>
        </article>

        <article className="inicio-card inicio-faq-card">
          <h3 className="section-title">Dúvidas Frequentes</h3>
          <div className="faq-list">
            <details className="faq-item">
              <summary className="faq-question">
                Como funciona a gravação do jogo?
              </summary>
              <p className="faq-answer">
                Ao adicionar a gravação no seu agendamento, ativamos
                automaticamente a câmera da quadra. O vídeo fica disponível em
                "Meus Vídeos" 30 minutos após o término.
              </p>
            </details>

            <details className="faq-item">
              <summary className="faq-question">
                Posso cancelar uma reserva?
              </summary>
              <p className="faq-answer">
                Cancelamentos com até 2 horas de antecedência são gratuitos.
                Depois disso, não há reembolso.
              </p>
            </details>

            <details className="faq-item">
              <summary className="faq-question">
                Diferença entre quadra coberta e descoberta?
              </summary>
              <p className="faq-answer">
                A coberta garante jogo mesmo com chuva e iluminação constante.
                A descoberta oferece sensação ao ar livre e melhor custo.
              </p>
            </details>

            <details className="faq-item">
              <summary className="faq-question">
                Como agendar uma aula com professor?
              </summary>
              <p className="faq-answer">
                Acesse a aba "Aulas" e escolha o professor e horário desejado. 
                As aulas têm duração de 1 hora e incluem análise técnica.
              </p>
            </details>

            <details className="faq-item">
              <summary className="faq-question">
                Qual o horário de funcionamento?
              </summary>
              <p className="faq-answer">
                Funcionamos de segunda a domingo, das 6h às 23h. 
                Reservas online podem ser feitas 24/7.
              </p>
            </details>

            <details className="faq-item">
              <summary className="faq-question">
                Preciso levar equipamento próprio?
              </summary>
              <p className="faq-answer">
                Sim, traga sua raquete e bolas. Caso não tenha, oferecemos 
                aluguel de equipamentos por R$ 15,00 por partida.
              </p>
            </details>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Inicio;
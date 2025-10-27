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

  return (
    <div className="page-container-inicio">
      
      {/* 1. CABEÇALHO DE BOAS-VINDAS */}
      <div className="inicio-header">
        <h2 className="inicio-welcome">Olá, Jogador!</h2>
        <p className="inicio-date">{getCurrentDate()}</p>
      </div>
      
      {/* 2. CARD DE PRÓXIMA RESERVA (HERO) */}
      <div className="next-booking-card">
        <span className="card-icon">🎾</span>
        <div className="card-text-content">
          <h3 className="next-booking-title">Próxima Reserva</h3>
          <p className="next-booking-time">Hoje, 14:00 - 15:00</p>
          <p className="next-booking-details">Quadra 01</p>
        </div>
        <button className="next-booking-btn">
          Detalhes
        </button>
      </div>
      
      {/* 3. SEÇÃO DE ACESSO RÁPIDO */}
      <div className="quick-access-section">
        <h3 className="section-title">Acesso Rápido</h3>
        
        {/* Ação Principal (Agendar) */}
        <button 
          className="book-now-card"
          onClick={() => navigate('/agendamento')}
        >
          <div className="book-now-icon-wrapper">
            <span className="book-now-icon">📅</span>
          </div>
          <h3 className="book-now-title">Agendar Agora</h3>
          <p className="book-now-subtitle">Reserve sua quadra rapidamente</p>
        </button>
        
        {/* Ações Secundárias (Grid) */}
        <div className="secondary-actions-grid">
          
          <button 
            className="secondary-action-card"
            onClick={() => navigate('/aulas')}
          >
            <span className="card-icon">🧑‍🏫</span>
            <h4 className="secondary-card-title">Marcar Aula</h4>
          </button>
          
          <button 
            className="secondary-action-card"
            onClick={() => navigate('/videos')}
          >
            <span className="card-icon">🎬</span>
            <h4 className="secondary-card-title">Meus Vídeos</h4>
          </button>

        </div>
      </div>

      {/* 4. NOVA SEÇÃO DE FAQ */}
      <div className="faq-section">
        <h3 className="section-title">Dúvidas Frequentes</h3>
        <div className="faq-list">
          
          <details className="faq-item">
            <summary className="faq-question">Como funciona a gravação do jogo?</summary>
            <p className="faq-answer">
              Ao adicionar a gravação no seu agendamento, ativamos automaticamente a câmera da sua quadra. O vídeo fica disponível na seção "Meus Vídeos" 30 minutos após o término da sua reserva.
            </p>
          </details>

          <details className="faq-item">
            <summary className="faq-question">Posso cancelar uma reserva?</summary>
            <p className="faq-answer">
              Sim, você pode cancelar qualquer reserva com até 2 horas de antecedência sem custo, diretamente pela tela "Minhas Reservas" (que você pode adicionar no futuro). Cancelamentos com menos de 2 horas não são reembolsáveis.
            </p>
          </details>

          <details className="faq-item">
            <summary className="faq-question">Qual a diferença entre a quadra coberta e descoberta?</summary>
            <p className="faq-answer">
              A quadra coberta permite que você jogue mesmo em dias de chuva e possui uma iluminação mais consistente. A quadra descoberta é mais barata e proporciona a sensação clássica de jogar ao ar livre.
            </p>
          </details>

        </div>
      </div>

      {/* 5. NOVA SEÇÃO DE CONTATO */}
      <div className="contact-section">
        <h3 className="section-title">Entre em Contato</h3>
        {/* Reutilizamos o grid de ações para manter a consistência visual */}
        <div className="secondary-actions-grid">
          
          <a 
            href="https://wa.me/5561999998888" // Link direto para WhatsApp
            target="_blank" 
            rel="noopener noreferrer" 
            className="secondary-action-card contact-card"
          >
            <span className="card-icon">💬</span>
            <h4 className="secondary-card-title">WhatsApp</h4>
          </a>
          
          <a 
            href="mailto:contato@arenabeach.com" // Link direto para Email
            className="secondary-action-card contact-card"
          >
            <span className="card-icon">✉️</span>
            <h4 className="secondary-card-title">Email</h4>
          </a>

        </div>
      </div>

    </div>
  );
};

export default Inicio;
import { useNavigate } from 'react-router-dom';
import './Perfil.css';

const Perfil = () => {
  const navigate = useNavigate();

  const preferences = [
    {
      id: 'alerts',
      title: 'Alertas de partidas',
      description: 'Receba notificações sobre reservas e alterações de horário.',
    },
    {
      id: 'offers',
      title: 'Promoções e novidades',
      description: 'Fique sabendo primeiro dos novos pacotes e eventos especiais.',
    },
    {
      id: 'recordings',
      title: 'Envio automático de gravações',
      description: 'Salve os vídeos das suas partidas diretamente na nuvem.',
    },
  ];

  const supportLinks = [
    { id: 'help', label: 'Central de ajuda' },
    { id: 'terms', label: 'Termos de uso' },
    { id: 'privacy', label: 'Política de privacidade' },
  ];

  return (
    <div className="profile-screen">
      <section className="profile-hero">
        <div className="profile-hero-content">
          <div className="profile-avatar-large">JS</div>
          <div>
            <div className="profile-hero-heading">
              <h1 className="profile-hero-name">João Silva</h1>
              <span className="profile-badge">Membro Gold</span>
            </div>
            <p className="profile-hero-email">joao.silva@example.com</p>
          </div>
        </div>
        <div className="profile-hero-actions">
          <button
            type="button"
            className="profile-hero-button secondary"
            onClick={() => navigate('/agendamento')}
          >
            Agendar partida
          </button>
          <button type="button" className="profile-hero-button primary">
            Editar perfil
          </button>
        </div>
      </section>

      <section className="profile-stats">
        <div className="profile-stat-card">
          <span className="profile-stat-label">Reservas confirmadas</span>
          <strong className="profile-stat-value">12</strong>
        </div>
        <div className="profile-stat-card">
          <span className="profile-stat-label">Horas jogadas</span>
          <strong className="profile-stat-value">48h</strong>
        </div>
        <div className="profile-stat-card">
          <span className="profile-stat-label">Ranking Arena</span>
          <strong className="profile-stat-value">#27</strong>
        </div>
      </section>

      <section className="profile-section">
        <header className="profile-section-header">
          <h2 className="profile-section-title">Próximas atividades</h2>
          <button
            type="button"
            className="profile-link-button"
            onClick={() => navigate('/videos')}
          >
            Ver vídeos
          </button>
        </header>
        <article className="profile-activity-card">
          <div className="profile-activity-icon">🎾</div>
          <div className="profile-activity-content">
            <h3 className="profile-activity-title">Quadra 02 · 27 outubro</h3>
            <p className="profile-activity-meta">19:00 - 20:00 · Inclui gravação</p>
          </div>
          <button
            type="button"
            className="profile-link-button"
            onClick={() => navigate('/agendamento')}
          >
            Detalhes
          </button>
        </article>
      </section>

      <section className="profile-section">
        <h2 className="profile-section-title">Preferências</h2>
        <ul className="profile-preferences-list">
          {preferences.map((item) => (
            <li key={item.id} className="profile-preference">
              <div>
                <h3 className="profile-preference-title">{item.title}</h3>
                <p className="profile-preference-description">{item.description}</p>
              </div>
              <label className="profile-switch">
                <input type="checkbox" defaultChecked />
                <span className="profile-switch-slider" />
              </label>
            </li>
          ))}
        </ul>
      </section>

      <section className="profile-section">
        <h2 className="profile-section-title">Conta</h2>
        <div className="profile-account-grid">
          {supportLinks.map((link) => (
            <button key={link.id} type="button" className="profile-option">
              {link.label}
            </button>
          ))}
          <button type="button" className="profile-option danger">
            Sair da conta
          </button>
        </div>
      </section>
    </div>
  );
};

export default Perfil;
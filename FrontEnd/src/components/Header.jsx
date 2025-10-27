import { NavLink } from 'react-router-dom';
import ArenaBeach from '../assets/ArenaBeach.jpg';

const Header = () => {
  
  // Função para o NavLink aplicar a classe 'active-nav-link'
  const getNavLinkClass = ({ isActive }) => {
    return `header-nav-link ${isActive ? 'active-nav-link' : ''}`;
  };

  return (
    <header className="app-header">
      <div className="header-content">
        <div className="header-logo">
          <div className="header-logo-icon">
            <img src={ArenaBeach} alt="ArenaBeach" className="header-logo-image" />
          </div>
          <h1 className="header-logo-text">Arena Beach</h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="header-desktop-nav">
          <NavLink to="/agendamento" className={getNavLinkClass}>
            Agendar
          </NavLink>
          <NavLink to="/aulas" className={getNavLinkClass}>
            Aulas
          </NavLink>
          <NavLink to="/videos" className={getNavLinkClass}>
            Meus Vídeos
          </NavLink>
          <div className="header-profile-icon"></div>
        </nav>

        <div className="header-mobile-profile header-profile-icon"></div>
      </div>
    </header>
  );
};

export default Header;
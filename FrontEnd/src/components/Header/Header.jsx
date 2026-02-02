import { NavLink } from 'react-router-dom';
import ArenaBeach from '../../assets/ArenaBeach.jpg';
import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-content">
        {/* Lado Esquerdo: Logo (Agora clicável para Home) */}
        <NavLink to="/inicio" className="header-brand">
          <img src={ArenaBeach} alt="Arena Beach Logo" className="header-logo-image" />
          <h1 className="header-logo-text">Arena Beach</h1>
        </NavLink>
        
        {/* Lado Direito: Navegação Desktop */}
        <nav className="header-desktop-nav">
           {/* Aqui você pode adicionar outros links futuramente (ex: Agendar, Rankings) */}
           
          <div className="header-nav-profile">
            <NavLink
              to="/perfil"
              className={({ isActive }) =>
                `profile-pill ${isActive ? 'active-profile' : ''}`
              }
            >
              <span className="profile-name">Minha Conta</span>
              <div className="profile-avatar">
                {/* Ícone de Usuário (SVG Inline) */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
            </NavLink>
          </div>
        </nav>

        {/* Lado Direito: Perfil Mobile (Apenas Ícone) */}
        <NavLink 
          to="/perfil" 
          className={({ isActive }) =>
            `header-mobile-profile ${isActive ? 'active-profile' : ''}`
          }
        >
          <div className="profile-avatar">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
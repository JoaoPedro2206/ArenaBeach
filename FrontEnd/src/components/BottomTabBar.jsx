import { NavLink } from 'react-router-dom';

const BottomTabBar = () => {
  const tabs = [
    { id: 'inicio', icon: '🏠', label: 'Início', path: '/inicio' },
    { id: 'agendamento', icon: '📅', label: 'Agendar', path: '/agendamento' },
    { id: 'aulas', icon: '🎾', label: 'Aulas', path: '/aulas' },
    { id: 'videos', icon: '🎬', label: 'Vídeos', path: '/videos' },
    { id: 'perfil', icon: '👤', label: 'Perfil', path: '/perfil' }
  ];

  const getTabClass = ({ isActive }) => {
    return `tab-link ${isActive ? 'active-tab-link' : ''}`;
  };

  return (
    <nav className="bottom-tab-bar">
      <div className="bottom-tab-content">
        {tabs.map((tab) => (
          <NavLink
            key={tab.id}
            to={tab.path}
            className={getTabClass}
          >
            {({ isActive }) => (
              <>
                <span className="tab-link-icon">{tab.icon}</span>
                <span className={`tab-link-label ${isActive ? 'active-tab-label' : ''}`}>
                  {tab.label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomTabBar;
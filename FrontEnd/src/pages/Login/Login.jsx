import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoImg from '../../assets/Arena.png';
import './Login.css';

const CheckIcon = () => (
  <svg className="auth-list-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" clipRule="evenodd" />
  </svg>
);

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica de autenticação aqui
    console.log('Login attempt with:', formData);
    navigate('/inicio');
  };

  return (
    <div className="auth-page">
      <div className="auth-card-grid">
        <aside className="auth-aside">
          <div className="auth-brand-container">
            <img src={logoImg} alt="Arena Beach" className="auth-brand-logo" />
            <h1 className="auth-aside-title">Sua arena particular</h1>
            <p className="auth-aside-text">
              Gerencie suas reservas e aulas de forma simples e rápida.
            </p>
          </div>
          <ul className="auth-aside-list">
            <li>
              <CheckIcon />
              <span className="auth-list-text">Reserve horários em qualquer uma de nossas quadras.</span>
            </li>
            <li>
              <CheckIcon />
              <span className="auth-list-text">Agende aulas com professores especializados.</span>
            </li>
          </ul>
        </aside>

        <main className="auth-card">
          <header className="auth-heading">
            <h2 className="auth-title">Acesse sua conta</h2>
            <p className="auth-subtitle">Bem-vindo de volta! Por favor, insira seus dados.</p>
          </header>

          <form className="auth-form" onSubmit={handleSubmit}>
            <label className="auth-label">
              <span>Email</span>
              <input
                className="auth-input"
                type="email"
                name="email"
                placeholder="seu@email.com"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            <label className="auth-label">
              <span>Senha</span>
              <input
                className="auth-input"
                type="password"
                name="password"
                placeholder="••••••••"
                autoComplete="current-password"
                required
                value={formData.password}
                onChange={handleChange}
              />
            </label>
            <button className="auth-button" type="submit">
              Entrar
            </button>
          </form>

          <footer className="auth-footer">
            Ainda não tem uma conta? <Link to="/cadastro" className="auth-link">Criar conta</Link>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Login;

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoImg from '../assets/Arena.png';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/inicio');
  };

  return (
    <div className="auth-page">
      <div className="auth-card-grid">
        <aside className="auth-aside">
          <div className="auth-brand-header">
            <img src={logoImg} alt="Arena Beach" className="auth-brand-logo" />
          </div>
          <h1 className="auth-aside-title">Bem-vindo</h1>
          <p className="auth-aside-text">
            Gerencie reservas e acompanhe aulas em um só lugar.
          </p>
          <ul className="auth-aside-list">
            <li>
              <span className="auth-list-icon">✔️</span>
              <span className="auth-list-text">Marque suas aulas no horario desejado</span>
            </li>
            <li>
              <span className="auth-list-icon">✔️</span>
              <span className="auth-list-text">Marque aulas com professores</span>
            </li>
            <li>
              <span className="auth-list-icon">✔️</span>
              <span className="auth-list-text">Baixe seus videos</span>
            </li>
          </ul>
        </aside>

        <main className="auth-card">
          <header className="auth-heading">
            <h2 className="auth-title">Entrar</h2>
            <p className="auth-subtitle">Acesse sua conta para continuar</p>
          </header>

          <form className="auth-form" onSubmit={handleSubmit}>
            <label className="auth-label">
              Email
              <input
                className="auth-input"
                type="email"
                name="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            <label className="auth-label">
              Senha
              <input
                className="auth-input"
                type="password"
                name="password"
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
            Ainda não tem conta? <Link to="/cadastro">Criar conta</Link>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Login;
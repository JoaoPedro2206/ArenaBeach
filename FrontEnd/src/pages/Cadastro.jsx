import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoImg from '../assets/Arena.png';

const Cadastro = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

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
          <h1 className="auth-aside-title">Crie sua conta</h1>
          <p className="auth-aside-text">
            Reserve quadras, marque aulas e receba suas gravações com poucos cliques.
          </p>
          <ul className="auth-aside-list">
            <li>
              <span className="auth-list-icon">✔️</span>
              <span className="auth-list-text">Agenda inteligente e integrada</span>
            </li>
            <li>
              <span className="auth-list-icon">✔️</span>
              <span className="auth-list-text">Professores certificados</span>
            </li>
            <li>
              <span className="auth-list-icon">✔️</span>
              <span className="auth-list-text">Compartilhamento fácil de vídeos</span>
            </li>
          </ul>
        </aside>

        <main className="auth-card">
          <header className="auth-heading">
            <h2 className="auth-title">Criar conta</h2>
            <p className="auth-subtitle">Comece a reservar suas quadras agora</p>
          </header>

          <form className="auth-form" onSubmit={handleSubmit}>
            <label className="auth-label">
              Nome completo
              <input
                className="auth-input"
                type="text"
                name="name"
                autoComplete="name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </label>
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
                autoComplete="new-password"
                required
                value={formData.password}
                onChange={handleChange}
              />
            </label>
            <label className="auth-label">
              Confirmar senha
              <input
                className="auth-input"
                type="password"
                name="confirmPassword"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </label>
            <button className="auth-button" type="submit">
              Cadastrar
            </button>
          </form>

          <footer className="auth-footer">
            Já tem conta? <Link to="/login">Entrar</Link>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Cadastro;
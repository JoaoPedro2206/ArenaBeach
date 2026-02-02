import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout';
import Inicio from './pages/Inicio/Inicio';
import Agendamento from './pages/Agendamento/Agendamento';
import Aulas from './pages/Aulas/Aulas';
import Cadastro from './pages/Cadastro/Cadastro';
import Login from './pages/Login/Login';
import Perfil from './pages/Perfil/Perfil';

export default function Router() {
  return (
    <Routes>
      {/* Redireciona a rota raiz "/" para "/login" */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      
      <Route element={<Layout />}>
        {/* A rota "inicio" agora é acessada diretamente, sem ser o index */}
        <Route path="inicio" element={<Inicio />} />
        <Route path="agendamento" element={<Agendamento />} />
        <Route path="aulas" element={<Aulas />} />
        <Route path="perfil" element={<Perfil />} />
      </Route>
    </Routes>
  );
}
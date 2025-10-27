import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout';
import Inicio from './pages/Inicio';
import Agendamento from './pages/Agendamento';
import Aulas from './pages/Aulas';
import Videos from './pages/Videos';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Perfil from './pages/Perfil';

export default function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route element={<Layout />}>
        <Route index element={<Navigate to="/inicio" replace />} />
        <Route path="inicio" element={<Inicio />} />
        <Route path="agendamento" element={<Agendamento />} />
        <Route path="aulas" element={<Aulas />} />
        <Route path="videos" element={<Videos />} />
        <Route path="perfil" element={<Perfil />} />
      </Route>
    </Routes>
  );
}
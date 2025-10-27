import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout';
import Inicio from './pages/Inicio';
import Agendamento from './pages/Agendamento';
import Aulas from './pages/Aulas';
import Videos from './pages/Videos';

export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Redireciona para /agendamento por padrão */}
        <Route index element={<Navigate to="/agendamento" replace />} />
        
        <Route path="inicio" element={<Inicio />} />
        <Route path="agendamento" element={<Agendamento />} />
        <Route path="aulas" element={<Aulas />} />
        <Route path="videos" element={<Videos />} />
      </Route>
    </Routes>
  );
}
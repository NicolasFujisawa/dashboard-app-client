import Dashboard from '../pages/Dashboard';
import { Route, Outlet, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Navbar from '../components/navbar';
import Produto from '../pages/Produto';
import Cargo from '../pages/Cargo';
import Categoria from '../pages/Categoria';

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route path="/" element={<Dashboard />} />
      <Route path="/produtos" element={<Produto />} />
      <Route path="/cargos" element={<Cargo />} />
      <Route path="/categorias" element={<Categoria />} />
    </Route>
  )
);

export default router 
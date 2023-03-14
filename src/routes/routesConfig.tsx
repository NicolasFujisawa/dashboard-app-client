import Dashboard from '../pages/Dashboard';
import { Route, Outlet, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Navbar from '../components/navbar';
import Produto from '../pages/Produto';

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
      <Route path="/produto" element={<Produto />} />
    </Route>
  )
);

export default router 
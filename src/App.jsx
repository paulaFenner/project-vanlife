import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout.jsx';

import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import Vans from './pages/Vans/Vans.jsx';
import VanDetail from './pages/Vans/VanDetail.jsx';

import Dashboard from './pages/Host /Dashboard.jsx';
import Income from './pages/Host /Income.jsx';
import Reviews from './pages/Host /Reviews.jsx';

import HostLayout from './components/HostLayout.jsx';

import './server.js';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

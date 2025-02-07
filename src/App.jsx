import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout.jsx';

import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import Vans from './pages/Vans/Vans.jsx';
import VanDetail from './pages/Vans/VanDetail.jsx';

import Dashboard from './pages/Host /Dashboard.jsx';
import Income from './pages/Host /Income.jsx';
import Reviews from './pages/Host /Reviews.jsx';

import './server.js';
import HostLayout from './components/HostLayout.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route path="/host" element={<HostLayout />}>
            <Route path="/host" element={<Dashboard />} />
            <Route path="/host/income" element={<Income />} />
            <Route path="/host/reviews" element={<Reviews />} />
          </Route>

          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

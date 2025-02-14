import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout.jsx';

import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import Vans, { loader as vansLoader } from './pages/Vans/Vans.jsx';
import VanDetail from './pages/Vans/VanDetail.jsx';

import Dashboard from './pages/Host/Dashboard.jsx';
import Income from './pages/Host/Income.jsx';
import Reviews from './pages/Host/Reviews.jsx';
import VansHost from './pages/Host/VansHost.jsx';
import VanHostDetail from './pages/Host/VanHostDetail.jsx';

import HostVanInfo from './pages/Host/HostVanInfo.jsx';
import HostVanPhotos from './pages/Host/HostVanPhotos.jsx';
import HostVanPricing from './pages/Host/HostVanPricing.jsx';

import HostLayout from './components/HostLayout.jsx';

import NotFound from './pages/NotFound.jsx';
import Login from './pages/Login.jsx';
import AuthRequired from './pages/Host/AuthRequired.jsx';

import './server.js';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} errorElement={<Error />} loader={vansLoader} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="login" element={<Login />} />

          <Route element={<AuthRequired />}>
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<VansHost />} />
              <Route path="vans/:id" element={<VanHostDetail />}>
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

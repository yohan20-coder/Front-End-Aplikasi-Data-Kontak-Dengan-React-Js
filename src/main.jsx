import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import DashboardLayout from './components/DashboardLayout';
import UserRegister from './components/user/UserRegister';
import UserLogin from './components/User/UserLogin';
import UserProfile from './components/User/UserProfile';
import UserLogout from './components/User/userLogout';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        <Route element={<Layout />}>
          <Route
            path="/register"
            element={<UserRegister />}
          />

          <Route
            path="/login"
            element={<UserLogin />}
          />
        </Route>
        

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="contacts" element={<div>Contacts</div>} />
          <Route path="users/profile" element={<UserProfile/>} />
          <Route path="users/logout" element={<UserLogout/>} />
        </Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>
);
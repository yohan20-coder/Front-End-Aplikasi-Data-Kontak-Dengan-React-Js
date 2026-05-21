import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import DashboardLayout from './components/DashboardLayout';
import UserRegister from './components/user/UserRegister';
import UserLogin from './components/User/UserLogin';
import UserProfile from './components/User/UserProfile';
import UserLogout from './components/User/userLogout';
import ContactCreate from './components/Contact/ContactCreate';

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

        <Route path="users">
          <Route path="profile" element={<UserProfile/>} />
          <Route path="logout" element={<UserLogout/>} />
        </Route>
          

        <Route path="contacts">
          <Route index element={<div>Contacts</div>} />
          <Route path="create" element={<ContactCreate />} />
        </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
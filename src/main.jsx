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
import ContactList from './components/Contact/ContactList';
import ContactEdit from './components/Contact/ContactEdit';
import ContactDetail from './components/Contact/ContactDetail';

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
          <Route index element={<ContactList />} />
          <Route path="create" element={<ContactCreate />} />
          <Route path=":id/edit" element={<ContactEdit />} />
          <Route path=":id" element={<ContactDetail />} />
        </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
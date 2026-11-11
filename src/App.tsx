import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { PublicLayout } from './components/public/PublicLayout';
import { ClientProfile } from './components/client/pages/ClientProfile';
import { LoginForm } from './components/public/auth/LoginForm';
import { RegisterForm } from './components/public/auth/RegisterForm';



// Модальное окно авторизации / регистрации




export default function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />} />
        <Route path="/client" element={<ClientProfile />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />

      </Routes>
    </BrowserRouter>
  );
}
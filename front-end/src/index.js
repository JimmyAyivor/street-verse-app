import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import ScrollButton from './components/BackToTop/ScrollButton';
import { AuthProvider } from './context/AuthContext';




ReactDOM.render(
  <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
          <ScrollButton />
       </AuthProvider> 
    </BrowserRouter>,
  document.getElementById('root')
);


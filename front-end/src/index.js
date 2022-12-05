import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import ScrollButton from './components/BackToTop/ScrollButton';
import { AuthContextProvider } from './context/AuthContext';




ReactDOM.render(
  <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
          <ScrollButton />
       </AuthContextProvider> 
    </BrowserRouter>,
  document.getElementById('root')
);


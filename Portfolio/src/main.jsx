import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import App from './App.jsx';
import FullBlogPage from './pages/FullBlogPage.jsx'; 


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog/:id" element={<FullBlogPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

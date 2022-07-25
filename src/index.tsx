import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import NotFound from './components/NotFound/NotFound';
import './styles/index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
    <BrowserRouter>
        <Routes>
            <Route index element={<App />} />
            <Route path="/page/:pageIndex" element={<App />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>,
);

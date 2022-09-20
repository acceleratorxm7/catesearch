import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
    </Routes>
  </BrowserRouter>
);
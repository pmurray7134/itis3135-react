import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Introduction from './Introduction.jsx'
import Contract from './Contract.jsx'


createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path='/introduction' element={<Introduction />}></Route>
            <Route path='/contract' element={<Contract />}></Route>
          </Routes>
        </BrowserRouter>
    </StrictMode>,
);
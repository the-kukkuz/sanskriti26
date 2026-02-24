import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './app/page'
import Arang from './app/arang/page'
import './app/globals.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/arang" element={<Arang />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)

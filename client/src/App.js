import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { 
  AddCardPage, 
  HomePage, 
  ViewCardsPage, 
  ViewBrandsPage 
} from './pages'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-card" element={<AddCardPage />} />
        <Route path="/view-brands" element={<ViewBrandsPage />} />
        <Route path="/view-cards" element={<ViewCardsPage />} />
      </Routes>
    </div>
  );
}

export default App;

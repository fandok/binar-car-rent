// import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Homepage from "./pages/homepage";
import CarListPage from "./pages/carList";
import CarDetailPage from "./pages/carDetail";
// import NavigationBar from './component/NavigationBar';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/carList" element={<CarListPage />} />
        <Route path="/carList/:id" element={<CarDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;

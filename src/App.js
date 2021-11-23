import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Profile from './components/Profile';

export default function App() {
  return (
    <div>
      <Navbar />
      <hr className="hr" />
      <Routes>
        <Route exact path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/myprofile" element={<Profile />} />
      </Routes>
    </div>
  );
}

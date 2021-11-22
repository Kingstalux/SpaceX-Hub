import React from 'react';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Profile from './components/Profile';

export default function App() {
  return (
    <div>
      <Rockets />
      <Missions />
      <Profile />
    </div>
  );
}

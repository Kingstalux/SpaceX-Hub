import React from 'react';
import { useSelector } from 'react-redux';

export default function RocketProfile() {
  const rocketsArray = useSelector((state) => state.rocketsReducer.rockets);

  const reservedRockets = rocketsArray.filter((rocket) => rocket.reserve === true);

  const rocketProfile = reservedRockets.map((rocket) => (
    <div key={rocket.id} className="reserve-rocket-mission">
      {rocket.name}
    </div>
  ));

  return (
    <div>
      <h2>My Rockets</h2>
      {rocketProfile}
    </div>
  );
}

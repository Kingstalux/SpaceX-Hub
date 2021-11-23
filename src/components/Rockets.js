import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rockets';

export default function Rockets() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, []);

  const rocketsArray = useSelector((state) => state.rocketsReducer.rockets);
  const rocketList = rocketsArray.map((rocket) => (
    <div key={rocket.id} className="rocket-card">
      <img src={rocket.image} alt="rocket" />
      <div>
        <h3>{rocket.name}</h3>
        <p>{rocket.description}</p>
        <button type="button" className="rocket-btn">Reserve Rocket</button>
      </div>
    </div>
  ));

  return (
    <div className="rocket-container">
      {rocketList}
    </div>
  );
}

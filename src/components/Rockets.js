import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { fetchRockets, bookRocket, cancelRocket } from '../redux/rockets/rockets';

export default function Rockets() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, []);

  const reserveRocket = (e) => {
    dispatch(bookRocket(e.target.parentElement.id));
    document.getElementById(e.target.nextSibling.id).classList.remove('hide');
    document.getElementById(e.target.id).classList.add('hide');
  };

  const cancelReserve = (e) => {
    dispatch(cancelRocket(e.target.parentElement.id));
    document.getElementById(e.target.id).classList.add('hide');
    document.getElementById(e.target.previousSibling.id).classList.remove('hide');
  };

  const rocketsArray = useSelector((state) => state.rocketsReducer.rockets);

  const rocketList = rocketsArray.map((rocket) => (
    <div key={rocket.id} className="rocket-card">
      <img src={rocket.image} alt="rocket" />
      <div id={rocket.id}>
        <h3>{rocket.name}</h3>
        <p>{rocket.description}</p>
        <button type="button" id={uuidv4()} className="rocket-btn" onClick={reserveRocket}>Reserve Rocket</button>
        <button type="button" id={uuidv4()} className="cancel-rocket hide" onClick={cancelReserve}>Cancel reservation</button>
      </div>
    </div>
  ));

  return (
    <div className="rocket-container">
      {rocketList}
    </div>
  );
}

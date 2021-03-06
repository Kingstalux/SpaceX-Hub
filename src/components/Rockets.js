import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { fetchRockets, bookRocket, cancelRocket } from '../redux/rockets/rockets';

export default function Rockets() {
  const dispatch = useDispatch();

  const rocketsArray = useSelector((state) => state.rocketsReducer.rockets);

  const getItems = () => {
    if (rocketsArray.length === 0) {
      dispatch(fetchRockets());
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  const reserveRocket = (e) => {
    dispatch(bookRocket(e.target.parentElement.id));
  };

  const cancelReserve = (e) => {
    dispatch(cancelRocket(e.target.parentElement.id));
  };

  const rocketList = rocketsArray.map((rocket) => (
    <div key={rocket.id} className="rocket-card">
      <img src={rocket.image} alt="rocket" />
      <div id={rocket.id}>
        <h3>{rocket.name}</h3>
        <p>
          {rocket.reserve && <button type="button" className="rocket-batch">RESERVED</button>}
          {rocket.description}
        </p>
        {rocket.reserve
          ? <button type="button" id={uuidv4()} className="cancel-rocket" onClick={cancelReserve}>Cancel reservation</button>
          : <button type="button" id={uuidv4()} className="rocket-btn" onClick={reserveRocket}>Reserve rocket</button>}
      </div>
    </div>
  ));

  return (
    <div className="rocket-container">
      {rocketList}
    </div>
  );
}

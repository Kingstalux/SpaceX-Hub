import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets, bookRocket } from '../redux/rockets/rockets';

export default function Rockets() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, []);

  const reserveRocket = (e) => {
    dispatch(bookRocket(e.target.parentElement.id));
  };

  const cancelRocket = () => {
    console.log('cancel reservation');
  };

  // const reserveBtn =
  //  <button type="button" className="rocket-btn" onClick={reserveRocket}>Reserve Rocket</button>;
  // const cancelReserve =
  //  <button type="button" onClick={reserveRocket}>Cancel reservation</button>;

  const rocketsArray = useSelector((state) => state.rocketsReducer.rockets);

  console.log(rocketsArray[0].id);

  let button;

  rocketsArray.forEach((element) => {
    if (element.reserve !== true) {
      button = <button type="button" className="rocket-btn" onClick={reserveRocket}>Reserve Rocket</button>;
    } else {
      button = <button type="button" onClick={cancelRocket}>Cancel reservation</button>;
    }
  });

  const rocketList = rocketsArray.map((rocket) => (
    <div key={rocket.id} className="rocket-card">
      <img src={rocket.image} alt="rocket" />
      <div id={rocket.id}>
        <h3>{rocket.name}</h3>
        <p>{rocket.description}</p>
        {button}
        {/* {cancelReserve} */}
      </div>
    </div>
  ));

  return (
    <div className="rocket-container">
      {rocketList}
    </div>
  );
}

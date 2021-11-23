import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rockets';

export default function Rockets() {


  return (
    <div className="rocket-container">
      {rocketList}
    </div>
  );
}

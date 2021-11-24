import React from 'react';
import { useSelector } from 'react-redux';

const selectMissions = useSelector((state) => state.missionReducer);

const MissionsProfile = () => {
  const joinedMissions = selectMissions.filter((mission) => mission.isReserved === true);
  const missionProfile = joinedMissions.forEach((mission) => (
    <div className="reserve-rocket">
      {mission.mission_name}
    </div>
  ));
  return (
    <div>
      <h2>My Missions</h2>
      {missionProfile}
    </div>
  );
};

export default MissionsProfile;

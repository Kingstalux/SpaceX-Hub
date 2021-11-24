import React from 'react';
import { useSelector } from 'react-redux';

const selectMissions = (state) => state.missionsReducer;

const MissionsProfile = () => {
  const selectedMissions = useSelector(selectMissions);
  const joinedMissions = selectedMissions.filter((mission) => mission.isReserved === true);
  const missionProfile = joinedMissions.map((mission) => (
    <div key={mission.mission_id} className="reserve-rocket-mission">
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

// const GET_MISSIONS_FROM_API = 'SpaceX-Hub/missions/GET_MISSIONS_FROM_API';
const GET_MISSIONS = 'spacex-hub/missions/GET_MISSIONS';
const JOIN_MISSION = 'spacex-hub/missions/JOIN_MISSION';
const LEAVE_MISSION = 'spacex-hub/missions/LEAVE_MISSION';
const missionsUrl = 'https://api.spacexdata.com/v3/missions';
const initialState = [];

const listMissions = (payload) => ({
  type: GET_MISSIONS,
  payload,
});

export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

export const leaveMission = (payload) => ({
  type: LEAVE_MISSION,
  payload,
});

const newStateToJoinMission = (missions, id) => {
  const newState = missions.map((mission) => {
    if (mission.mission_id !== id) {
      return mission;
    }
    return { ...mission, isReserved: true };
  });
  return newState;
};

const newStateToLeaveMission = (missions, id) => {
  const newState = missions.map((mission) => {
    if (mission.mission_id !== id) {
      return mission;
    }
    return { ...mission, isReserved: false };
  });
  return newState;
};

export const getMissionsFromApi = () => (async (dispatch) => {
  const response = await fetch(missionsUrl);
  const data = await response.json();
  const missionArr = [];
  data.forEach((m) => {
    const mission = {
      mission_id: m.mission_id,
      mission_name: m.mission_name,
      mission_description: m.description,
    };
    missionArr.push(mission);
  });
  dispatch(listMissions(missionArr));
});

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return [...state, ...action.payload];
    case JOIN_MISSION:
      return newStateToJoinMission(state, action.payload);
    case LEAVE_MISSION:
      return newStateToLeaveMission(state, action.payload);
    default:
      return state;
  }
};

export default missionsReducer;

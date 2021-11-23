// const GET_MISSIONS_FROM_API = 'SpaceX-Hub/missions/GET_MISSIONS_FROM_API';
const GET_MISSIONS = 'spacex-hub/missions/GET_MISSIONS';
const missionsUrl = 'https://api.spacexdata.com/v3/missions';
const initialState = [];

const listMissions = (payload) => ({
  type: GET_MISSIONS,
  payload,
});

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
    default:
      return state;
  }
};

export default missionsReducer;

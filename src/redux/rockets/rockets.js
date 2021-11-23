const FETCH_ROCKETS_BEGIN = 'spacex-hub/rockets/FETCH_ROCKETS_BEGIN';
const FETCH_ROCKETS_SUCCESS = 'spacex-hub/rockets/FETCH_ROCKETS_SUCCESS';
const FETCH_ROCKETS_FAILURE = 'spacex-hub/rockets/FETCH_ROCKETS_FAILURE';

const initialState = {
  rockets: [],
  loading: false,
  error: null,
};

const fetchRocketsBegin = () => ({
  type: FETCH_ROCKETS_BEGIN,
});

const fetchRocketsSuccess = (payload) => ({
  type: FETCH_ROCKETS_SUCCESS,
  payload,
});

const fetchRocketsFailure = (error) => ({
  type: FETCH_ROCKETS_FAILURE,
  payload: { error },
});

const rocketApi = 'https://api.spacexdata.com/v3/rockets';

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export function fetchRockets() {
  return (dispatch) => {
    dispatch(fetchRocketsBegin());
    return fetch(rocketApi)
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        const rockets = [];
        json.forEach((element) => {
          const rocket = {
            id: element.id,
            name: element.rocket_name,
            description: element.description,
            image: element.flickr_images[0],
          };
          rockets.push(rocket);
        });
        dispatch(fetchRocketsSuccess(rockets));
      })
      .catch((error) => dispatch(fetchRocketsFailure(error)));
  };
}

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_ROCKETS_SUCCESS:
      return {
        ...state,
        loading: false,
        rockets: action.payload,
      };

    case FETCH_ROCKETS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        rockets: [],
      };

    default:
      return state;
  }
};

export default rocketsReducer;

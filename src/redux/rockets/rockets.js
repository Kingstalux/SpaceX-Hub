const FETCH_ROCKETS_BEGIN = 'spacex-hub/rockets/FETCH_ROCKETS_BEGIN';
const FETCH_ROCKETS_SUCCESS = 'spacex-hub/rockets/FETCH_ROCKETS_SUCCESS';
const FETCH_ROCKETS_FAILURE = 'spacex-hub/rockets/FETCH_ROCKETS_FAILURE';
const ROCKETS_BOOKING = 'spacex-hub/rockets/ROCKETS_BOOKING';
const ROCKETS_CANCELATION = 'spacex-hub/rockets/ROCKETS_CANCELATION';

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

export const bookRocket = (payload) => ({
  type: ROCKETS_BOOKING,
  payload,
});

export const cancelRocket = (payload) => ({
  type: ROCKETS_CANCELATION,
  payload,
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

    case ROCKETS_BOOKING:
      return {
        ...state,
        rockets: state.rockets.map((rocket) => {
          if (action.payload - 1 + 1 !== rocket.id) {
            return rocket;
          }
          return { ...rocket, reserve: true };
        }),
      };

    case ROCKETS_CANCELATION:
      return {
        ...state,
        rockets: state.rockets.map((rocket) => {
          if (action.payload - 1 + 1 !== rocket.id) {
            return rocket;
          }
          return { ...rocket, reserve: false };
        }),
      };

    default:
      return state;
  }
};

export default rocketsReducer;

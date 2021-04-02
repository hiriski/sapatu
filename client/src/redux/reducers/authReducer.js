import {
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  SET_AUTH_TOKEN,
} from '../actions/authActions';

const initialState = {
  login: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: null,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        login: {
          isLoading: true,
          isSuccess: false,
          isError: false,
          errorMessage: null,
        },
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        login: {
          isLoading: false,
          isSuccess: false,
          isError: true,
          errorMessage: action.payload,
        },
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        login: {
          isLoading: false,
          isSuccess: true,
          isError: false,
          errorMessage: null,
        },
      };

    default:
      return state;
  }
  return state;
};

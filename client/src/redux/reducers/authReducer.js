import {
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
} from '../actions/authActions';

const initialState = {
  user: null,
  token: null,
  login: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
  },
  register: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
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
    case REGISTER_REQUEST:
      return {
        ...state,
        register: {
          isLoading: true,
          isSuccess: false,
          isError: false,
          errorMessage: null,
        },
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        register: {
          isLoading: false,
          isSuccess: false,
          isError: true,
          errorMessage: action.payload,
        },
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        register: {
          isLoading: false,
          isSuccess: true,
          isError: false,
          errorMessage: null,
        },
      };

    default:
      return state;
  }
};

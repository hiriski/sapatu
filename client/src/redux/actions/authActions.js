import axios from 'axios';
import { batch } from 'react-redux';
import { API_URL, USER_TOKEN_KEY } from 'src/constants';
import LocalStorageService from 'src/services/LocalStorageService';
import AuthService from 'src/services/AuthService';

/** another actions */
import { showAlert } from './alertActions';

/** Actions types  */
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
// export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const FETCHING_AUTHENTICATED_USER_REQUEST =
  'FETCHING_AUTHENTICATED_USER_REQUEST';
export const FETCHING_AUTHENTICATED_USER_FAILURE =
  'FETCHING_AUTHENTICATED_USER_FAILURE';
export const FETCHING_AUTHENTICATED_USER_SUCCESS =
  'FETCHING_AUTHENTICATED_USER_SUCCESS';

// export const setAuthToken = (token) => ({
//   type: SET_AUTH_TOKEN,
//   payload: token,
// });

/**
 * ------------------------
 * Login action
 * ------------------------
 * */
export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginFailure = (errorMessage) => ({
  type: LOGIN_FAILURE,
  payload: errorMessage,
});

export const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

export const login = (credentials) => {
  return async (dispatch) => {
    let errMessage = 'Login failed';
    dispatch(loginRequest());
    try {
      const response = await axios.post(API_URL + '/login', credentials);
      if (response.status === 200) {
        LocalStorageService.setItem(
          USER_TOKEN_KEY,
          JSON.stringify(response.data),
        );
        dispatch(loginSuccess(response.data));
      }
    } catch (e) {
      if (e.response !== undefined) {
        if (e.response.status === 422) {
          errMessage = 'Username / Password yang anda masukan salah';
          dispatch(loginFailure(errMessage));
          batch(() => {
            dispatch(
              showAlert({
                message: errMessage,
                severity: 'error',
              }),
            );
          });
        } else {
          dispatch(loginFailure(errMessage));
        }
      } else {
        dispatch(loginFailure(errMessage));
      }
    }
  };
};

/**
 * ------------------------
 * Register action
 * ------------------------
 * */

export const registerRequest = () => ({
  type: REGISTER_REQUEST,
});

export const registerFailure = (errorMessage) => ({
  type: REGISTER_FAILURE,
  payload: errorMessage,
});

export const registerSuccess = (data) => ({
  type: REGISTER_SUCCESS,
  payload: data,
});

export const register = (userData) => {
  return async (dispatch) => {
    let errMessage = 'Register failed';
    dispatch(registerRequest());
    try {
      const response = await axios.post(API_URL + '/register', userData);
      if (response.status === 201) {
        LocalStorageService.setItem(
          USER_TOKEN_KEY,
          JSON.stringify(response.data),
        );
        dispatch(registerSuccess(response.data));
      }
    } catch (e) {
      if (e.response !== undefined) {
        console.log(e.response);
        if (e.response.status === 422) {
          errMessage = 'Unprocessable entity';
          batch(() => {
            dispatch(registerFailure(errMessage));
            dispatch(
              showAlert({
                message: errMessage,
                severity: 'error',
              }),
            );
          });
        }
      } else {
        batch(() => {
          dispatch(registerFailure(errMessage));
          dispatch(
            showAlert({
              message: errMessage,
              severity: 'error',
            }),
          );
        });
      }
    }
  };
};

/**
 * Fetching authentcated user
 */
export const fetchingAuthenticatedUserRequest = () => ({
  type: FETCHING_AUTHENTICATED_USER_REQUEST,
});

export const fetchingAuthenticatedUserFailure = (errorMessage) => ({
  type: FETCHING_AUTHENTICATED_USER_FAILURE,
  payload: errorMessage,
});

export const fetchingAuthenticatedUserSuccess = () => ({
  type: FETCHING_AUTHENTICATED_USER_SUCCESS,
});

export const fetchAuthenticatedUser = (token) => {
  return (dispatch) => {
    dispatch(fetchingAuthenticatedUserRequest());
    AuthService.getAuthenticatedUser(token)
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
          batch(() => {
            dispatch(fetchingAuthenticatedUserSuccess());
            dispatch(setUserData(response.data.user));
          });
        } else {
          dispatch(fetchingAuthenticatedUserFailure('Token is not valid'));
        }
      })
      .catch((e) => {
        dispatch(fetchingAuthenticatedUserFailure('Token is not valid'));
        dispatch(setAlert(AlertTypes.error, 'Token is not valid'));
      });
  };
};

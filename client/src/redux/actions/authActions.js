import axios from 'axios';
import { batch } from 'react-redux';
import { API_URL, USER_TOKEN_KEY } from 'src/constants';
import LocalStorageService from 'src/services/LocalStorageService';
import AuthService from 'src/services/AuthService';
// import { AlertTypes } from 'src/constants/AlertTypes';
// import { setUserData } from './userActions';

/** Actions types  */
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const FETCHING_AUTHENTICATED_USER_REQUEST =
  'FETCHING_AUTHENTICATED_USER_REQUEST';
export const FETCHING_AUTHENTICATED_USER_FAILURE =
  'FETCHING_AUTHENTICATED_USER_FAILURE';
export const FETCHING_AUTHENTICATED_USER_SUCCESS =
  'FETCHING_AUTHENTICATED_USER_SUCCESS';

/** actions */
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

export const setAuthToken = (token) => ({
  type: SET_AUTH_TOKEN,
  payload: token,
});

export const login = (credentials) => (dispatch) => {
  dispatch(loginRequest());
  axios
    .post(API_URL + '/login', credentials)
    .then((response) => {
      if (response.status === 200) {
        LocalStorageService.setItem(USER_TOKEN_KEY, response.data.token);
        console.log(response);
        batch(() => {
          dispatch(loginSuccess(response.data));
          dispatch(setAuthToken(response.data.token));
        });
      } else {
        dispatch(loginFailure('Login failed'));
      }
    })
    .catch((e) => {
      dispatch(loginFailure('Login failed'));
    });
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

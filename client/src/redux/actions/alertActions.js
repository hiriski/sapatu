import { batch } from 'react-redux';

export const SET_ALERT = 'SET_ALERT';
export const UNSET_ALERT = 'SET_ALERT';
export const SHOW_ALERT = 'SHOW_ALERT';
export const HIDE_ALERT = 'HIDE_ALERT';
export const TOGGLE_ALERT = 'TOGGLE_ALERT';

export const showAlert = ({
  message,
  severity = 'success',
  autoHideDuration = 5000,
}) => (dispatch) => {
  batch(() => {
    dispatch({
      type: SET_ALERT,
      payload: {
        message,
        severity,
        autoHideDuration,
      },
    });
    dispatch({
      type: SHOW_ALERT,
    });
  });
};

export const hideAlert = () => (dispatch) => {
  batch(() => {
    dispatch({
      type: HIDE_ALERT,
    });
    dispatch({
      type: UNSET_ALERT,
    });
  });
};

export const toggleAlert = () => ({
  type: TOGGLE_ALERT,
});

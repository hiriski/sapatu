import {
  SHOW_ALERT,
  HIDE_ALERT,
  TOGGLE_ALERT,
  SET_ALERT,
  UNSET_ALERT,
} from '../actions/alertActions';

const defaultState = {
  show: false,
  message: null,
  autoHideDuration: 5000,
  severity: '',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_ALERT:
      return {
        ...state,
        ...action.payload,
      };
    case UNSET_ALERT:
      return {
        ...state,
        message: null,
        autoHideDuration: 5000,
        severity: '',
      };
    case SHOW_ALERT:
      return {
        ...state,
        show: true,
      };
    case HIDE_ALERT:
      return {
        ...state,
        show: false,
      };
    case TOGGLE_ALERT:
      return {
        ...state,
        show: !state.show,
      };
    default:
      return state;
  }
};

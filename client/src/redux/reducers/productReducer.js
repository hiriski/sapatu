import {
  FETCHING_PRODUCT_LIST_REQUEST,
  FETCHING_PRODUCT_LIST_FAILURE,
  FETCHING_PRODUCT_LIST_SUCCESS,
  RESET_FETCHING_PRODUCT_LIST,
} from '../actions/productActions';

const initialState = {
  list: {
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: null,
    products: null,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_PRODUCT_LIST_REQUEST:
      return {
        ...state,
        list: {
          isFetching: true,
          isSuccess: false,
          isError: false,
          errorMessage: null,
        },
      };
    case FETCHING_PRODUCT_LIST_FAILURE:
      return {
        ...state,
        list: {
          isFetching: false,
          isSuccess: false,
          isError: true,
          errorMessage: action.payload,
        },
      };
    case FETCHING_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        list: {
          isFetching: false,
          isSuccess: true,
          isError: false,
          errorMessage: null,
          products: action.payload,
        },
      };
    case RESET_FETCHING_PRODUCT_LIST:
      return {
        ...state,
        list: initialState.list,
      };

    default:
      return state;
  }
};

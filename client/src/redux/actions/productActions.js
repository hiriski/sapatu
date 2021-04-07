import api from 'src/api';
export const FETCHING_PRODUCT_LIST_REQUEST = 'FETCHING_PRODUCT_LIST_REQUEST';
export const FETCHING_PRODUCT_LIST_FAILURE = 'FETCHING_PRODUCT_LIST_FAILURE';
export const FETCHING_PRODUCT_LIST_SUCCESS = 'FETCHING_PRODUCT_LIST_SUCCESS';
export const RESET_FETCHING_PRODUCT_LIST = 'RESET_FETCHING_PRODUCT_LIST';

export const fetchingProductRequest = () => ({
  type: FETCHING_PRODUCT_LIST_REQUEST,
});

export const fetchingProductFailure = (errMessage) => ({
  type: FETCHING_PRODUCT_LIST_FAILURE,
  payload: errMessage,
});

export const fetchingProductSuccess = (products) => ({
  type: FETCHING_PRODUCT_LIST_SUCCESS,
  payload: products,
});

export const fetchProductList = () => {
  return async (dispatch) => {
    dispatch(fetchingProductRequest());
    try {
      const response = await api.get('/product');
      if (response.status === 200) {
        dispatch(fetchingProductSuccess(response.data.data));
        console.log(response);
      }
    } catch (e) {
      console.log(e);
      dispatch(fetchingProductFailure('failed to fetch product list'));
    }
  };
};

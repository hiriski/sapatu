import { USER_TOKEN_KEY } from 'src/constants';
import LocalStorageService from 'src/services/LocalStorageService';

/**
 * Get user token from local storage
 */
export const getUserToken = () => {
  try {
    let userToken = LocalStorageService.getItem(USER_TOKEN_KEY);
    if (userToken !== null) {
      return JSON.parse(userToken);
    }
  } catch (e) {
    console.log(e);
    return;
  }
};

import { USER_TOKEN_KEY } from 'src/constants';
import LocalStorageService from 'src/services/LocalStorageService';

/**
 * Get user token from local storage
 */
export const getUserToken = () => {
  return LocalStorageService.getItem(USER_TOKEN_KEY);
};

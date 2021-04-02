import axios from 'axios';
import { API_URL } from 'src/constants';

class AuthService {
  login = async (credentials) => {
    const req = await axios.post(`${API_URL}/login`, credentials);
    return req;
  };
  register = (credentials) => {
    return axios.post(`${API_URL}/register`, credentials);
  };
}

export default new AuthService();

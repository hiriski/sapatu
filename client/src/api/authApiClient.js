import axios from 'axios';
import { API_URL } from 'src/constants';

const authApiClient = axios.create({
  baseURL: API_URL,
  'Content-Type': 'application/json',
  Accept: 'application/json',
});

export default authApiClient;

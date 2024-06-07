import AxiosInstance from 'app/api';
import { POSTS_URL } from '../constants';

export const getPosts = () => AxiosInstance.get(POSTS_URL);

import { POSTS_URL } from 'constants';

import AxiosInstance from 'app/api';

export const getPosts = () => AxiosInstance.get(POSTS_URL);
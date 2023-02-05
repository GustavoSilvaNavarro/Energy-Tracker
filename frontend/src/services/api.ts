import axios from 'axios';

import { env } from '../helpers/env';

export const api = axios.create({
  baseURL: env.baseApiUrl,
});

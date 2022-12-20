import axios from 'axios';

import { env } from '../helpers/env';
import { IStateDetails } from '../types/app-types';

export const getListOfStates = async () => {
  try {
    const result = await axios.get(`${env.urlServer}/states-list/details`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    const list = result.data as unknown as Array<IStateDetails>;
    return list;
  } catch (err) {
    console.error(err);
  }
};

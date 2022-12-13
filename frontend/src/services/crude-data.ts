import axios from 'axios';

import { env } from '../helpers/env';
import { ICrudProduction, IRequestData } from '../types/api-types';

export const getCrudeOilProduction = async (filters: IRequestData) => {
  try {
    const data = await axios.get(
      `${env.baseApiUrl}/${env.crudeEndPoint}?api_key=${env.openDataKey}&frequency=${filters.frequency}&data[0]=value&start=${filters.start}&end=${filters.end}&sort[0][column]=period&sort[0][direction]=desc&offset=${filters.offset}&length=${filters.length}`
    );

    const production = data.data as unknown as ICrudProduction;
    return production;
  } catch (err) {
    console.error(err);
  }
};

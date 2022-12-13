import axios from 'axios';

import env from '../config/env';

export const monthlyCrudeProduction = async () => {
  const result = await axios.get(
    `${env.openDataBaseUrl}/${env.endPointApi}?api_key=${env.opeDataPublicKey}&frequency=monthly&data[0]=value&start=2020-01&end=2020-12&sort[0][column]=period&sort[0][direction]=desc&offset=0&length=5000`
  );

  const crudeProduction = result.data;
  return crudeProduction;
};

import axios from 'axios';

import { StatesSchema } from '../schemas/states-models';
import { IStates } from '../../types/api-data';
import env from '../../config/env';

export const getListStates = async () => {
  const list = await StatesSchema.findAll({});

  return list;
};

export const storeDetails = async () => {
  const arrayExist = await StatesSchema.findAll({});
  const data = ['AS', 'GU', 'MP', 'PR', 'VI'];

  if (Array.isArray(arrayExist) && arrayExist.length < 1) {
    const result = await axios.get(`${env.statesDetailsEndpoint}`, {
      headers: {
        'X-RapidAPI-Key': `${env.statesDetailsSecretKey}`,
        'X-RapidAPI-Host': `${env.statesDetailsHost}`,
      },
    });

    const list = result.data as unknown as Array<IStates>;

    const listToStore = list.map(item => ({ name: item.name, postal: item.postal }));
    const stateList = listToStore.filter(element => {
      if (!data.includes(element.postal)) {
        return element;
      }
    });

    return await StatesSchema.bulkCreate(stateList);
  }

  return 'List already in DB';
};

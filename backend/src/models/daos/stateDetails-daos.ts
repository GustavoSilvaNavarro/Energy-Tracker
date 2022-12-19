import { StatesSchema } from '../schemas/states-models';

export const getListStates = async () => {
  const list = await StatesSchema.findAll({});

  return list;
};

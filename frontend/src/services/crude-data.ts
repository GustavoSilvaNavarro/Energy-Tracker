import { api } from './api';
import { env } from '../helpers/env';
import { ICrudProduction, IRequestData, IGeneration, IGenerationFilter } from '../types/api-types';

export const getCrudeOilProduction = async (filters: IRequestData) => {
  try {
    const data = await api.get(
      `/${filters.endPoint}?api_key=${env.openDataKey}&frequency=${filters.frequency}&data[0]=value&start=${filters.start}&end=${filters.end}&sort[0][column]=period&sort[0][direction]=asc&offset=${filters.offset}&length=${filters.length}`
    );

    const production = data.data as unknown as ICrudProduction;
    return production;
  } catch (err) {
    console.error(err);
  }
};

export const getGenerationData = async (filter: IGenerationFilter) => {
  try {
    const result = await api.get(
      `/${filter.endPoint}?api_key=${env.openDataKey}&frequency=${filter.frequency}&data[0]=generation&facets[state][]=${filter.state}&start=${filter.start}&end=${filter.end}&sort[0][column]=period&sort[0][direction]=asc&offset=${filter.offset}&length=${filter.length}`
    );

    const generation = result.data as unknown as IGeneration;
    return generation;
  } catch (err) {
    console.error(err);
  }
};

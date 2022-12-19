import { env } from '../helpers/env';

// export const oilFilters = {
//   frequency: 'monthly',
//   start: '2020-01',
//   end: '2020-12',
//   offset: 0,
//   length: 5000,
//   endPoint: env.crudeEndPoint,
// };

// export const gasFilters = {
//   frequency: 'monthly',
//   start: '2020-01',
//   end: '2020-12',
//   offset: 0,
//   length: 5000,
//   endPoint: env.naturalGasEndPoint,
// };

export const netGenerationFilters = {
  frequency: 'monthly',
  start: '2020-01',
  end: '2020-12',
  state: 'VT',
  offset: 0,
  length: 5000,
  endPoint: env.netGeneration,
};

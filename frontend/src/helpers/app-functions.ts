import { ICrudProduction, IGeneration } from '../types/api-types';

const getMonths = (date: string) => {
  const months = {
    '01': 'Jan',
    '02': 'Feb',
    '03': 'Mar',
    '04': 'Apr',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'Aug',
    '09': 'Sept',
    '10': 'Oct',
    '11': 'Nov',
    '12': 'Dec',
  };

  if (date in months) return months[date as keyof typeof months];
  return date;
};

export const getMaxDate = () => {
  const date = new Date();

  return date.setFullYear(date.getFullYear() - 1);
};

export const getProductionByYear = (data: ICrudProduction, year: string) => {
  const totalByMonth = data.response.data.reduce((acc, current) => {
    const val = acc.find(item => item.period === current.period);

    if (!val) {
      return [...acc, { period: current.period, total: current.value }];
    }

    val.total += current.value;

    return [...acc];
  }, [] as unknown as { period: string; total: number }[]);

  const result = {
    dates: totalByMonth.map(item => getMonths(item.period.split('-')[1])),
    total: totalByMonth.map(item => item.total),
    year: year.split('-')[0],
  };

  return result;
};

export const getProductionByState = (data: ICrudProduction) => {
  const totalByArea = data.response.data.reduce((acc, current) => {
    const val = acc.find(item => item.area === current['area-name']);

    if (!val) {
      return [
        ...acc,
        {
          area: current['area-name'],
          total: current.value,
          product: current.product,
          description: current['series-description'],
          units: current.units,
        },
      ];
    }

    val.total += current.value;

    return [...acc];
  }, [] as unknown as { area: string; total: number; product: string; description: string; units: string }[]);

  return totalByArea;
};

export const getAccumulativeGeneration = (data: IGeneration, year: string) => {
  const electricityByMonth = data.response.data.reduce((acc, current) => {
    const value = acc.find(element => element.period === current.period);

    if (!value) {
      return [...acc, { period: current.period, total: current.generation }];
    }

    value.total += current.generation;

    return [...acc];
  }, [] as unknown as { period: string; total: number }[]);

  const result = {
    dates: electricityByMonth.map(item => getMonths(item.period.split('-')[1])),
    total: electricityByMonth.map(
      (
        sum => item =>
          (sum += item.total)
      )(0)
    ),
    year: year.split('-')[0],
  };

  return result;
};

export const netGenerationByFuelType = (data: IGeneration) => {
  const powerByFuel = data.response.data.reduce((acc, current) => {
    const value = acc.find(item => item.fuelCode === current.fuel2002);

    if (!value) {
      return [...acc, { fuel: current.fuelTypeDescription, total: current.generation, fuelCode: current.fuel2002 }];
    }

    value.total += current.generation;

    return [...acc];
  }, [] as unknown as { fuel: string; total: number; fuelCode: string }[]);

  const result = {
    fuelTypes: powerByFuel.map(item => item.fuel),
    total: powerByFuel.map(item => item.total),
  };

  return result;
};

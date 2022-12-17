import { ICrudProduction } from '../types/api-types';

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

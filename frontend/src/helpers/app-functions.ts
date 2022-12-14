import { getCrudeOilProduction } from '../services/crude-data';

const filters = {
  frequency: 'monthly',
  start: '2020-01',
  end: '2020-12',
  offset: 0,
  length: 5000,
};

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

export const getOilProductionByYear = async () => {
  const data = await getCrudeOilProduction(filters);

  if (!data) return null;

  const totalByMonth = data.response.data
    .reduce((acc, current) => {
      const val = acc.find(item => item.period === current.period);

      if (!val) {
        return [...acc, { period: current.period, total: current.value }];
      }

      val.total += current.value;

      return [...acc];
    }, [] as unknown as { period: string; total: number }[])
    .reverse();

  console.log(data);

  const result = {
    dates: totalByMonth.map(item => getMonths(item.period.split('-')[1])),
    total: totalByMonth.map(item => item.total),
    year: filters.end.split('-')[0],
  };

  return result;
};

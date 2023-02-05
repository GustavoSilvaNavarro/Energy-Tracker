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
  const total = {} as { [key: string]: { period: string; total: number } };

  for (let i = data.response.data.length - 1; i >= 0; i--) {
    const production = data.response.data[i];

    if (Object.prototype.hasOwnProperty.call(total, production.period)) {
      total[`${production.period}`].total += production.value;
      continue;
    }

    total[`${production.period}`] = { period: production.period, total: production.value };
  }

  const values = Object.values(total);

  const result = { dates: [], total: [], year: year.split('-')[0] } as {
    dates: string[];
    total: number[];
    year: string;
  };

  while (values.length > 0) {
    const totalByMonth = values.pop();
    if (!totalByMonth) break;

    result.dates.push(getMonths(totalByMonth.period.split('-')[1]));
    result.total.push(totalByMonth.total);
  }

  return result;
};

export const getProductionByState = (data: ICrudProduction) => {
  const dataByState = {} as {
    [key: string]: { area: string; total: number; product: string; description: string; units: string };
  };

  data.response.data.forEach(current => {
    if (current['area-name'] in dataByState) {
      dataByState[`${current['area-name']}`].total += current.value;
    } else {
      dataByState[`${current['area-name']}`] = {
        area: current['area-name'],
        total: current.value,
        product: current.product,
        description: current['series-description'],
        units: current.units,
      };
    }
  });

  return Object.values(dataByState);
};

export const getAccumulativeGeneration = (data: IGeneration, year: string, state: string) => {
  const total = {} as { [key: string]: { period: string; total: number } };

  data.response.data.forEach(current => {
    if (current.period in total) {
      total[`${current.period}`].total += current.generation;
      return;
    }

    total[`${current.period}`] = { period: current.period, total: current.generation };
  });

  const values = Object.values(total);

  const result = { dates: [], total: [], year: year.split('-')[0], state } as {
    dates: string[];
    total: number[];
    year: string;
    state: string;
  };

  let previousAmount = 0;

  while (values.length > 0) {
    const currentData = values.shift();
    if (!currentData) break;

    result.dates.push(getMonths(currentData.period.split('-')[1]));
    result.total.push(previousAmount + currentData.total);
    previousAmount += currentData.total;
  }

  return result;
};

export const netGenerationByFuelType = (data: IGeneration) => {
  const powerByFuel = {} as { [key: string]: { fuel: string; total: number; fuelCode: string } };

  data.response.data.forEach(current => {
    if (current.fuelTypeDescription in powerByFuel) {
      powerByFuel[`${current.fuelTypeDescription}`].total += current.generation;
      return;
    }

    powerByFuel[`${current.fuelTypeDescription}`] = {
      fuel: current.fuelTypeDescription,
      total: current.generation,
      fuelCode: current.fuel2002,
    };
  });

  const dataFuelTypes = Object.values(powerByFuel);

  const result = { fuelTypes: [], total: [] } as { fuelTypes: Array<string>; total: Array<number> };

  while (dataFuelTypes.length > 0) {
    const fuelType = dataFuelTypes.shift();
    if (!fuelType) break;

    result.fuelTypes.push(fuelType.fuel);
    result.total.push(fuelType.total);
  }

  return result;
};

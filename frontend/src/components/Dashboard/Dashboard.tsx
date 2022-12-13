import { useState, useEffect } from 'react';

import { BarChart } from '../BarChart/BarChart';
import { IResultProduction } from '../../types/app-types';
import { getOilProductionByYear } from '../../helpers/app-functions';

export const Dashboard = () => {
  const [monthlyProduction, setMonthlyProduction] = useState<IResultProduction | null>(null);

  useEffect(() => {
    void getOilProductionByYear().then(data => setMonthlyProduction(data));
  }, []);

  if (!monthlyProduction) {
    return (
      <div>
        <h1>Loading data...</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome to Energy Tracker</h1>
      <BarChart chartData={monthlyProduction} />
    </div>
  );
};

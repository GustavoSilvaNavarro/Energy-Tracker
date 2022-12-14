import { useState, useEffect } from 'react';

import './Dashboard.css';

import { BarChart } from '../BarChart/BarChart';
import { IResultProduction } from '../../types/app-types';
import { getOilProductionByYear } from '../../helpers/app-functions';

export const Dashboard = () => {
  const [monthlyProduction, setMonthlyProduction] = useState<IResultProduction | null>(null);
  const [year, setYear] = useState('2020');

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
      <h1 className="text-center text-3xl text-white font-semibold py-4">Welcome to Energy Tracker - USA</h1>
      <div className="bg-dark-blue py-3 px-4">
        <select name="yearSelect" value={year} onChange={e => setYear(e.target.value)}>
          <option />
          <option value="2021">2021</option>
        </select>
      </div>
      <div>
        <div className="productionChart__container">
          <BarChart chartData={monthlyProduction} />
        </div>
      </div>
    </div>
  );
};

import { useState, useEffect } from 'react';

import './Dashboard.css';

import { BarChart } from '../BarChart/BarChart';
import { ProductionList } from '../ProductionList/ProductionList';
import { IResultProduction } from '../../types/app-types';
import { getOilProductionByYear, getProductionByState } from '../../helpers/app-functions';
import { oilFilters, gasFilters } from '../../helpers/filters-api';
import { oilChart, gasChart } from '../../helpers/chart-info';

export const Dashboard = () => {
  const [monthlyProduction, setMonthlyProduction] = useState<IResultProduction | null>(null);
  const [naturalGas, setNaturalGas] = useState<IResultProduction | null>(null);

  useEffect(() => {
    void getOilProductionByYear(oilFilters).then(data => setMonthlyProduction(data));
    void getOilProductionByYear(gasFilters).then(data => setNaturalGas(data));
    void getProductionByState(oilFilters);
  }, []);

  if (!monthlyProduction || !naturalGas) {
    return (
      <div>
        <h1>Loading data...</h1>
      </div>
    );
  }

  return (
    <div className="dashboardContainer">
      <div className="chartsContainer">
        <div className="productionChart__container">
          <BarChart chartData={monthlyProduction} details={oilChart} />
        </div>
        <div className="productionChart__container">
          <BarChart chartData={naturalGas} details={gasChart} />
        </div>
      </div>
      <div>
        <ProductionList />
      </div>
    </div>
  );
};

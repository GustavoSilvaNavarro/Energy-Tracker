import { useContext } from 'react';

import './Dashboard.css';

import { ProductionContext } from '../../context/ProductionContext';
import { BarChart } from '../BarChart/BarChart';
import { ProductionList } from '../ProductionList/ProductionList';
import { oilChart, gasChart } from '../../helpers/chart-info';

export const Dashboard = () => {
  const productionCtx = useContext(ProductionContext);

  if (!productionCtx || !productionCtx.oilProduction || !productionCtx.ngProduction) {
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
          <BarChart chartData={productionCtx.oilProduction} details={oilChart} />
        </div>
        <div className="productionChart__container">
          <BarChart chartData={productionCtx.ngProduction} details={gasChart} />
        </div>
      </div>
      <div>
        <ProductionList />
      </div>
    </div>
  );
};

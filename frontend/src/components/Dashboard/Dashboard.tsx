import { useContext } from 'react';

import './Dashboard.css';

import { Header } from '../Header/Header';
import { ProductionContext } from '../../context/Production/ProductionContext';
import { BarChart } from '../BarChart/BarChart';
import { PowerHeader } from '../PowerHeader/PowerHeader';
import { GenerationByFuel } from '../GenerationByFuel/GenerationByFuel';
import { LineChart } from '../LineChart/LineChart';
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
      <Header />
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
      <PowerHeader />
      <div className="flex items-center justify-center gap-x-8 mt-8">
        <LineChart />
        <GenerationByFuel />
      </div>
    </div>
  );
};

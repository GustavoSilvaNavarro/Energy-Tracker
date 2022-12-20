import { useContext } from 'react';
import { BallTriangle } from 'react-loader-spinner';

import './Dashboard.css';

import { Header } from '../Header/Header';
import { ProductionContext } from '../../context/Production/ProductionContext';
import { GenerationContext } from '../../context/Generation/GenerationContext';
import { BarChart } from '../BarChart/BarChart';
import { PowerHeader } from '../PowerHeader/PowerHeader';
import { GenerationByFuel } from '../GenerationByFuel/GenerationByFuel';
import { LineChart } from '../LineChart/LineChart';
import { ProductionList } from '../ProductionList/ProductionList';
import { oilChart, gasChart } from '../../helpers/chart-info';
import { Loader } from '../Loader/Loader';

export const Dashboard = () => {
  const productionCtx = useContext(ProductionContext);
  const generationCtx = useContext(GenerationContext);

  if (!productionCtx || !productionCtx.oilProduction || !productionCtx.ngProduction) {
    return (
      <section className="h-screen flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <BallTriangle
            height={200}
            width={200}
            radius={5}
            ariaLabel="ball-triangle-loading"
            visible={true}
            color="#4361ee"
          />
          <h3 className="text-[#4361ee] spinnerLoader__title">Loading data...</h3>
        </div>
      </section>
    );
  }

  return (
    <div className="dashboardContainer">
      <Header />
      <section className="chartsContainer">
        <div className="productionChart__container relative">
          <BarChart chartData={productionCtx.oilProduction} details={oilChart} />
          <Loader status={productionCtx.loadingStatus} />
        </div>
        <div className="productionChart__container relative">
          <BarChart chartData={productionCtx.ngProduction} details={gasChart} />
          <Loader status={productionCtx.loadingStatus} />
        </div>
      </section>
      <section>
        <ProductionList />
      </section>
      <PowerHeader />
      <section className="flex items-center flex-wrap justify-center gap-x-8 mt-8">
        <div className="relative">
          <LineChart />
          <Loader status={generationCtx && generationCtx.loadingStatus ? true : false} />
        </div>
        <div className="relative">
          <GenerationByFuel />
          <Loader status={generationCtx && generationCtx.loadingStatus ? true : false} />
        </div>
      </section>
    </div>
  );
};

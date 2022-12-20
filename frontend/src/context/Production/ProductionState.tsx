import { useState, useEffect } from 'react';

import { ProductionContext } from './ProductionContext';
import { IResultProduction, IProductionByState } from '../../types/app-types';
import { getCrudeOilProduction } from '../../services/crude-data';
import { getProductionByYear, getProductionByState } from '../../helpers/app-functions';
import { env } from '../../helpers/env';

export const ProductionState = ({ children }: { children: JSX.Element }) => {
  const [oilProduction, setOilProduction] = useState<IResultProduction | null>(null);
  const [oilProductionByState, setOilProductionByState] = useState<IProductionByState[]>([]);
  const [ngProduction, setNgProduction] = useState<IResultProduction | null>(null);
  const [ngProductionByState, setNgProductionByState] = useState<Array<IProductionByState>>([]);
  const [loadingStatus, setLoadingStatus] = useState(false);

  useEffect(() => {
    void retrieveAPIInfo();
  }, []);

  const retrieveAPIInfo = async (date = 2020) => {
    try {
      const oilDetails = {
        frequency: 'monthly',
        start: `${date}-01`,
        end: `${date}-12`,
        offset: 0,
        length: 5000,
        endPoint: env.crudeEndPoint,
      };

      const gasDetails = {
        frequency: 'monthly',
        start: `${date}-01`,
        end: `${date}-12`,
        offset: 0,
        length: 5000,
        endPoint: env.naturalGasEndPoint,
      };

      const oilData = getCrudeOilProduction(oilDetails);
      const gasData = getCrudeOilProduction(gasDetails);

      const [oil, gas] = await Promise.allSettled([oilData, gasData]);

      if (oil.status === 'fulfilled' && oil.value) {
        const oilMonthlyProduction = getProductionByYear(oil.value, oilDetails.end);
        const oilByState = getProductionByState(oil.value);
        setOilProduction(oilMonthlyProduction);
        setOilProductionByState(oilByState);
      }

      if (gas.status === 'fulfilled' && gas.value) {
        const ngMonthlyProduction = getProductionByYear(gas.value, gasDetails.end);
        const ngByState = getProductionByState(gas.value);
        setNgProduction(ngMonthlyProduction);
        setNgProductionByState(ngByState);
      }

      setLoadingStatus(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ProductionContext.Provider
      value={{
        oilProduction,
        ngProduction,
        oilProductionByState,
        ngProductionByState,
        retrieveAPIInfo,
        loadingStatus,
        setLoadingStatus,
      }}
    >
      {children}
    </ProductionContext.Provider>
  );
};

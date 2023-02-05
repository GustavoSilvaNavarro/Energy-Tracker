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
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const retrieveAPIInfo = async (date = 2020) => {
    try {
      await Promise.allSettled([
        grossProduction(date, env.crudeEndPoint, 'oil'),
        grossProduction(date, env.naturalGasEndPoint, 'gas'),
      ]);

      setLoadingStatus(false);
    } catch (err) {
      console.error(err);
    }
  };

  const grossProduction = async (date: number, endpoint: string, fuel: string) => {
    const details = {
      frequency: 'monthly',
      start: `${date}-01`,
      end: `${date + 1}-01`,
      offset: 0,
      length: 5000,
      endPoint: endpoint,
    };

    const data = await getCrudeOilProduction(details);

    if (data) {
      const monthlyProduction = getProductionByYear(data, details.end);
      const productionByState = getProductionByState(data);

      if (fuel === 'oil') {
        setOilProduction(monthlyProduction);
        setOilProductionByState(productionByState);
      } else {
        setNgProduction(monthlyProduction);
        setNgProductionByState(productionByState);
      }
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

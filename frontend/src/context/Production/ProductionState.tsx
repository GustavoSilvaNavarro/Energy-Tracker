import { useState, useEffect } from 'react';

import { ProductionContext } from './ProductionContext';
import { IResultProduction, IProductionByState } from '../../types/app-types';
import { getCrudeOilProduction } from '../../services/crude-data';
import { getProductionByYear, getProductionByState } from '../../helpers/app-functions';
import { oilFilters, gasFilters } from '../../helpers/filters-api';

export const ProductionState = ({ children }: { children: JSX.Element }) => {
  const [oilProduction, setOilProduction] = useState<IResultProduction | null>(null);
  const [oilProductionByState, setOilProductionByState] = useState<IProductionByState[]>([]);
  const [ngProduction, setNgProduction] = useState<IResultProduction | null>(null);
  const [ngProductionByState, setNgProductionByState] = useState<Array<IProductionByState>>([]);

  useEffect(() => {
    void retrieveAPIInfo();
  }, []);

  const retrieveAPIInfo = async () => {
    try {
      const oilData = getCrudeOilProduction(oilFilters);
      const gasData = getCrudeOilProduction(gasFilters);

      const [oil, gas] = await Promise.allSettled([oilData, gasData]);

      if (oil.status === 'fulfilled' && oil.value) {
        const oilMonthlyProduction = getProductionByYear(oil.value, oilFilters.end);
        const oilByState = getProductionByState(oil.value);
        setOilProduction(oilMonthlyProduction);
        setOilProductionByState(oilByState);
      }

      if (gas.status === 'fulfilled' && gas.value) {
        const ngMonthlyProduction = getProductionByYear(gas.value, gasFilters.end);
        const ngByState = getProductionByState(gas.value);
        setNgProduction(ngMonthlyProduction);
        setNgProductionByState(ngByState);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ProductionContext.Provider value={{ oilProduction, ngProduction, oilProductionByState, ngProductionByState }}>
      {children}
    </ProductionContext.Provider>
  );
};

import { useState, useEffect } from 'react';

import { ProductionDetails } from '../ProductionDetails/ProductionDetails';
import { getProductionByState } from '../../helpers/app-functions';
import { oilFilters, gasFilters } from '../../helpers/filters-api';
import { IProductionOilByState } from '../../types/app-types';

export const ProductionList = () => {
  const [productionByArea, setProductionByArea] = useState<IProductionOilByState[]>([]);
  const [gasProduction, setGasProduction] = useState<IProductionOilByState[]>([]);

  useEffect(() => {
    void getProductionByState(oilFilters).then(data => {
      if (data) setProductionByArea(data);
    });

    void getProductionByState(gasFilters).then(gas => {
      if (gas) setGasProduction(gas);
    });
  }, []);

  return (
    <div className="flex gap-6 justify-center">
      <ProductionDetails
        production={productionByArea}
        details={{ unit: 'MBBL', title: 'Monthly Oil Production by State' }}
      />
      <ProductionDetails
        production={gasProduction}
        details={{ unit: 'MMCF', title: 'Monthly Natural Gas Production by State' }}
      />
    </div>
  );
};

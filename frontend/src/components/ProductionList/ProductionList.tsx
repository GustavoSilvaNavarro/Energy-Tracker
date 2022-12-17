import { useContext } from 'react';

import { ProductionContext } from '../../context/ProductionContext';
import { ProductionDetails } from '../ProductionDetails/ProductionDetails';

export const ProductionList = () => {
  const productionCtx = useContext(ProductionContext);
  if (!productionCtx) {
    return (
      <div>
        <h1>Loading data...</h1>
      </div>
    );
  }

  return (
    <div className="flex gap-6 justify-center">
      <ProductionDetails
        production={productionCtx.oilProductionByState}
        details={{ unit: 'MBBL', title: 'Monthly Oil Production by State' }}
      />
      <ProductionDetails
        production={productionCtx.ngProductionByState}
        details={{ unit: 'MMCF', title: 'Monthly Natural Gas Production by State' }}
      />
    </div>
  );
};

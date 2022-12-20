import { useContext } from 'react';
import { ClipLoader } from 'react-spinners';

import { ProductionContext } from '../../context/Production/ProductionContext';
import { ProductionDetails } from '../ProductionDetails/ProductionDetails';

export const ProductionList = () => {
  const productionCtx = useContext(ProductionContext);
  if (!productionCtx) {
    return (
      <section>
        <div className="flex flex-col justify-center items-center">
          <ClipLoader color="#fff" size={75} speedMultiplier={1} loading={true} />
          <h3 className="text-white spinnerLoader__title text-base">Loading...</h3>
        </div>
      </section>
    );
  }

  return (
    <div className="flex flex-wrap gap-6 justify-center">
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

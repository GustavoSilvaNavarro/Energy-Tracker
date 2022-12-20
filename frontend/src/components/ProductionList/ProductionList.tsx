import { useContext } from 'react';
import { ClipLoader } from 'react-spinners';

import { ProductionContext } from '../../context/Production/ProductionContext';
import { ProductionDetails } from '../ProductionDetails/ProductionDetails';
import { Loader } from '../Loader/Loader';

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
      <div className="relative">
        <ProductionDetails
          production={productionCtx.oilProductionByState}
          details={{ unit: 'MBBL', title: 'Monthly Oil Production by State' }}
        />
        <Loader status={productionCtx.loadingStatus} />
      </div>
      <div className="relative">
        <ProductionDetails
          production={productionCtx.ngProductionByState}
          details={{ unit: 'MMCF', title: 'Monthly Natural Gas Production by State' }}
        />
        <Loader status={productionCtx.loadingStatus} />
      </div>
    </div>
  );
};

import { useState, useEffect } from 'react';

import { GenerationContext } from './GenerationContext';
import { getAccumulativeGeneration, netGenerationByFuelType } from '../../helpers/app-functions';
import { netGenerationFilters } from '../../helpers/filters-api';
import { getGenerationData } from '../../services/crude-data';
import { IResultProduction, IGenerationResult } from '../../types/app-types';

export const GenerationState = ({ children }: { children: JSX.Element }) => {
  const [netGeneration, setNetGeneration] = useState<IResultProduction | null>(null);
  const [powerByFuel, setPowerByFuel] = useState<IGenerationResult | null>(null);

  useEffect(() => {
    void retrieveGenerationData();
  }, []);

  const retrieveGenerationData = async () => {
    const generation = await getGenerationData(netGenerationFilters);

    if (!generation) return;

    const result = getAccumulativeGeneration(generation, netGenerationFilters.end);
    setNetGeneration(result);

    const data = netGenerationByFuelType(generation);
    setPowerByFuel(data);
  };

  return <GenerationContext.Provider value={{ netGeneration, powerByFuel }}>{children}</GenerationContext.Provider>;
};

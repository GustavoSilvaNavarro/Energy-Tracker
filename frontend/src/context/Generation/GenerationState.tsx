import { useState, useEffect } from 'react';

import { GenerationContext } from './GenerationContext';
import { getAccumulativeGeneration, netGenerationByFuelType } from '../../helpers/app-functions';
import { getGenerationData } from '../../services/crude-data';
import { IResultProduction, IGenerationResult } from '../../types/app-types';
import { env } from '../../helpers/env';

export const GenerationState = ({ children }: { children: JSX.Element }) => {
  const [netGeneration, setNetGeneration] = useState<IResultProduction | null>(null);
  const [powerByFuel, setPowerByFuel] = useState<IGenerationResult | null>(null);

  useEffect(() => {
    void retrieveGenerationData();
  }, []);

  const retrieveGenerationData = async (date = 2020, state = 'VT') => {
    const generationDetails = {
      frequency: 'monthly',
      start: `${date}-01`,
      end: `${date}-12`,
      state: state,
      offset: 0,
      length: 5000,
      endPoint: env.netGeneration,
    };

    const generation = await getGenerationData(generationDetails);

    if (!generation) return;

    const result = getAccumulativeGeneration(generation, generationDetails.end, state);
    setNetGeneration(result);

    const data = netGenerationByFuelType(generation);
    setPowerByFuel(data);
  };

  return (
    <GenerationContext.Provider value={{ netGeneration, powerByFuel, retrieveGenerationData }}>
      {children}
    </GenerationContext.Provider>
  );
};

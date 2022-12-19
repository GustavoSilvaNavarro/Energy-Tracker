import { createContext } from 'react';

import { IGenerationContext } from '../../types/app-types';

export const GenerationContext = createContext<IGenerationContext | null>(null);

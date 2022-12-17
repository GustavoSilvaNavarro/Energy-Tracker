import { createContext } from 'react';

import { IProductionContext } from '../types/app-types';

export const ProductionContext = createContext<IProductionContext | null>(null);

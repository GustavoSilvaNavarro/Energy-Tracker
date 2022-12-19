export interface IResultProduction {
  dates: Array<string>;
  total: Array<number>;
  year: string;
}

export interface IGenerationResult {
  fuelTypes: Array<string>;
  total: Array<number>;
}

export interface IProductionByState {
  area: string;
  total: number;
  product: string;
  description: string;
  units: string;
}

export interface IProductionContext {
  oilProduction: IResultProduction | null;
  ngProduction: IResultProduction | null;
  oilProductionByState: Array<IProductionByState>;
  ngProductionByState: Array<IProductionByState>;
}

export interface IStateDetails {
  id: number;
  name: string;
  postal: string;
}

export interface IGenerationContext {
  netGeneration: IResultProduction | null;
  powerByFuel: IGenerationResult | null;
}

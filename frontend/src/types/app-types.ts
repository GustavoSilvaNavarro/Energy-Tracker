export interface IResultProduction {
  dates: Array<string>;
  total: Array<number>;
  year: string;
  state?: string;
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
  retrieveAPIInfo: (date: number) => Promise<void>;
  loadingStatus: boolean;
  setLoadingStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IStateDetails {
  id: number;
  name: string;
  postal: string;
}

export interface IGenerationContext {
  netGeneration: IResultProduction | null;
  powerByFuel: IGenerationResult | null;
  retrieveGenerationData: (date: number, state: string) => Promise<void>;
  loadingStatus: boolean;
  setLoadingStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

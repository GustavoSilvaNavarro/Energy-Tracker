export interface IResultProduction {
  dates: Array<string>;
  total: Array<number>;
  year: string;
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

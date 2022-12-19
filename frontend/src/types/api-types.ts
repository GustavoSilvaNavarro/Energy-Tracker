export interface IParams {
  api_key: string;
  frequency: string;
  data: Array<string>;
  start: number;
  end: number;
  sort: Array<{ column: string; direction: string }>;
  offset: number;
  length: number;
}

export type Data = {
  period: string;
  duoarea: string;
  'area-name': string;
  product: string;
  'product-name': string;
  process: string;
  'process-name': string;
  series: string;
  'series-description': string;
  value: number;
  units: string;
};

export interface IResponse {
  total: number;
  dateFormat: string;
  frequency: string;
  data: Array<Data>;
}

export interface IRequest {
  command: string;
  params: IParams;
}

export interface ICrudProduction {
  response: IResponse;
  request: IRequest;
  apiVersion: string;
}

export interface IRequestData {
  frequency: string;
  start: string;
  end: string;
  offset: number;
  length: number;
  endPoint: string;
}

export interface IGenerationFilter extends IRequestData {
  state: string;
}

export type Generation = {
  period: string;
  plantCode: number;
  plantName: string;
  fuel2002: string;
  fuelTypeDescription: string;
  state: string;
  stateDescription: string;
  primeMover: string;
  generation: number;
  'generation-units': string;
};

export interface IResponseGeneration {
  total: number;
  dateFormat: string;
  frequency: string;
  data: Array<Generation>;
  description: string;
}

export interface IGeneration {
  response: IResponseGeneration;
  request: IRequest;
  apiVersion: string;
}

export interface IListOfStates {
  id: number;
  name: string;
  postal: string;
}

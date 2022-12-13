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
  period: number;
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

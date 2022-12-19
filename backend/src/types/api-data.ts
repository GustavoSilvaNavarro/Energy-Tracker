export interface IStates {
  name: string;
  postal: string;
  capital: {
    name: string;
    latitude: string;
    longitude: string;
  };
  population: {
    density_km: string;
    total: string;
    density_mi: string;
  };
}

export interface IStateDetails {
  id?: number;
  name: string;
  postal: string;
}

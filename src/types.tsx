export interface IWeather {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  weather: [{ description: string }];
  wind: { speed: number };
  cod: number;
  message: string;
}

export interface IError {
  cod?: number;
  message?: string;
}

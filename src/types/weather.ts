export type WeatherCondition = 'cloudy' | 'overcast' | 'sunny' | 'rainy' | 'sun-shower' | 'windy';

export type WeatherComfort = 'cold' | 'suitable' | 'hot' | 'very-hot';

export type AucklandWeatherResponse = {
  location: 'Auckland';
  temperatureCelsius: number;
  condition: WeatherCondition;
  comfort: WeatherComfort;
  observedAt: string;
  source: 'Open-Meteo';
};

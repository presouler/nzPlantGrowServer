import type { AucklandWeatherResponse, WeatherComfort, WeatherCondition } from '../types/weather.js';

const AUCKLAND_LATITUDE = -36.8485;
const AUCKLAND_LONGITUDE = 174.7633;
const WINDY_THRESHOLD_KMH = 35;

const OPEN_METEO_AUCKLAND_URL = new URL('https://api.open-meteo.com/v1/forecast');
OPEN_METEO_AUCKLAND_URL.search = new URLSearchParams({
  latitude: String(AUCKLAND_LATITUDE),
  longitude: String(AUCKLAND_LONGITUDE),
  current: 'temperature_2m,weather_code,wind_speed_10m,is_day',
  timezone: 'GMT'
}).toString();

type OpenMeteoCurrentWeather = {
  time?: unknown;
  temperature_2m?: unknown;
  weather_code?: unknown;
  wind_speed_10m?: unknown;
  is_day?: unknown;
};

type OpenMeteoForecastResponse = {
  current?: OpenMeteoCurrentWeather;
};

export class WeatherServiceError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'WeatherServiceError';
  }
}

export async function getAucklandWeather(): Promise<AucklandWeatherResponse> {
  const response = await fetch(OPEN_METEO_AUCKLAND_URL);

  if (!response.ok) {
    throw new WeatherServiceError(`Open-Meteo request failed with status ${response.status}`);
  }

  const data = (await response.json()) as OpenMeteoForecastResponse;
  const current = data.current;

  if (!current) {
    throw new WeatherServiceError('Open-Meteo response did not include current weather');
  }

  const temperatureCelsius = toNumber(current.temperature_2m, 'temperature_2m');
  const weatherCode = toNumber(current.weather_code, 'weather_code');
  const windSpeedKmh = toNumber(current.wind_speed_10m, 'wind_speed_10m');
  const observedAt = toIsoDateTime(current.time);
  const isDay = typeof current.is_day === 'number' ? current.is_day === 1 : undefined;

  return {
    location: 'Auckland',
    temperatureCelsius,
    condition: mapWeatherCondition(weatherCode, windSpeedKmh, isDay),
    comfort: mapWeatherComfort(temperatureCelsius),
    observedAt,
    source: 'Open-Meteo'
  };
}

function toNumber(value: unknown, fieldName: string): number {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    throw new WeatherServiceError(`Open-Meteo response field ${fieldName} was not a finite number`);
  }

  return value;
}

function toIsoDateTime(value: unknown): string {
  if (typeof value !== 'string' || value.length === 0) {
    throw new WeatherServiceError('Open-Meteo response field time was not a string');
  }

  const utcValue = value.endsWith('Z') ? value : `${value}Z`;
  const date = new Date(utcValue);

  if (Number.isNaN(date.getTime())) {
    throw new WeatherServiceError('Open-Meteo response field time was not a valid date');
  }

  return date.toISOString();
}

function mapWeatherCondition(weatherCode: number, windSpeedKmh: number, isDay?: boolean): WeatherCondition {
  if (isRainyWeatherCode(weatherCode)) {
    return weatherCode === 80 && isDay !== false ? 'sun-shower' : 'rainy';
  }

  if (windSpeedKmh >= WINDY_THRESHOLD_KMH) {
    return 'windy';
  }

  if (weatherCode === 0 || weatherCode === 1) {
    return 'sunny';
  }

  if (weatherCode === 3) {
    return 'overcast';
  }

  return 'cloudy';
}

function isRainyWeatherCode(weatherCode: number): boolean {
  return (
    (weatherCode >= 51 && weatherCode <= 67) ||
    (weatherCode >= 80 && weatherCode <= 82) ||
    (weatherCode >= 95 && weatherCode <= 99)
  );
}

function mapWeatherComfort(temperatureCelsius: number): WeatherComfort {
  if (temperatureCelsius < 12) {
    return 'cold';
  }

  if (temperatureCelsius < 26) {
    return 'suitable';
  }

  if (temperatureCelsius < 32) {
    return 'hot';
  }

  return 'very-hot';
}

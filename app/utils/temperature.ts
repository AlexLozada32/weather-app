export const toFahrenheit = (kelvin: number) => {
  return (((kelvin - 273.15) * 9) / 5 + 32).toFixed(2);
};

export const toCelsius = (kelvin: number) => {
  return (kelvin - 273.15).toFixed(2);
};

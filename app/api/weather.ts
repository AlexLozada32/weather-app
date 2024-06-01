const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

const weatherAPI = async (city: string): Promise<any> => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&unit=metric&appid=${apiKey}`,
  );
  const data = await response.json();
  console.log(data);

  return data;
};

export default weatherAPI;

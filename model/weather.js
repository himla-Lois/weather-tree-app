export async function getWeather(city) {
  // Mockad data – byt ut mot API senare
  return {
    city: city,
    season: "spring",      // "summer", "autumn", "winter"
    condition: "clear",    // "rain", "snow", "clouds"
    temp: 15
  };
}

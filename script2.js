const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search-btn");
const resultContainer = document.querySelector("#result-container");


const getWeather = async (cityName) => {
  resultContainer.innerHTML = "<p>データを取得中...</p>";

  try {
    const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1&language=ja&format=json`);
    const geoData = await geoRes.json();

    if (!geoData.results || geoData.results.length === 0) {
      throw new Error("都市が見つかりませんでした。");
    }

    const { latitude, longitude, name } = geoData.results[0];


    const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
    const weatherData = await weatherRes.json();

    const temp = weatherData.current_weather.temperature;
    const windspeed = weatherData.current_weather.windspeed;

    resultContainer.innerHTML = `
      <div class="weather-card">
        <h2>${name} の天気</h2>
        <p style="font-size: 2rem; margin: 10px 0;">🌡️ ${temp} ℃</p>
        <p>風速: ${windspeed} km/h</p>
      </div>
    `;

  } catch (error) {
    resultContainer.innerHTML = `<p class="error">${error.message}</p>`;
  }
};

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city !== "") {
    getWeather(city);
  }
});

const API_KEY = "4603c4e49845a3569b330e621a94351e"; 

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search-btn");
const resultContainer = document.querySelector("#result-container");


const getWeather = async (cityName) => {
  resultContainer.innerHTML = "<p>読み込み中...</p>";


  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric&lang=ja`;

  try {
    const response = await fetch(url);
    
   
    if (!response.ok) {
      throw new Error("都市が見つかりませんでした");
    }

    const data = await response.json();


    const name = data.name;
    const temp = Math.round(data.main.temp); 
    const description = data.weather[0].description; 
    const iconCode = data.weather[0].icon; 
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;


    resultContainer.innerHTML = `
      <div class="weather-card">
        <h2>${name} の天気</h2>
        <img src="${iconUrl}" alt="${description}">
        <p>天気: ${description}</p>
        <p>気温: ${temp} ℃</p>
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
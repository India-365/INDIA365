document.addEventListener("DOMContentLoaded", () => {
    const apiKey = '1f8a2504ac88c02555f76e8378dd8f58'; // Get your API key from OpenWeatherMap
    const city = 'New Delhi'; // You can change the city here

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherDescription = data.weather[0].description;
            const temperature = Math.round(data.main.temp);
            const humidity = data.main.humidity;

            const weatherInfo = document.querySelector('.weather-info');
            weatherInfo.innerHTML = `
                <p>Weather: ${weatherDescription}</p>
                <p>Temperature: ${temperature} °C</p>
                <p>Humidity: ${humidity}%</p>
            `;
        })
        .catch(error => {
            console.log('Error fetching weather data:', error);
            const weatherInfo = document.querySelector('.weather-info');
            weatherInfo.innerHTML = '<p>Failed to fetch weather data</p>';
        });
});

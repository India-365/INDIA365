document.addEventListener("DOMContentLoaded", () => {
    const apiKey = '1f8a2504ac88c02555f76e8378dd8f58'; // Replace with your OpenWeatherMap API key
    const city = 'Ajman'; // Replace with desired city

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const weatherDescription = data.weather[0].description;
            const temperature = Math.round(data.main.temp);
            const humidity = data.main.humidity;
            const iconCode = data.weather[0].icon;

            // Update weather info display
            const weatherInfo = document.querySelector('.weather-info');
            weatherInfo.innerHTML = `
                <p>Weather: ${weatherDescription}</p>
                <p>Temperature: ${temperature} °C</p>
                <p>Humidity: ${humidity}%</p>
            `;

            // Display alert based on weather condition
            displayWeatherAlert(weatherDescription);
        })
        .catch(error => {
            console.log('Error fetching weather data:', error);
            const weatherInfo = document.querySelector('.weather-info');
            weatherInfo.innerHTML = '<p>Failed to fetch weather data</p>';
        });

    function displayWeatherAlert(weatherDescription) {
        let alertMessage = '';

        // Check weather description and set alert message
        if (weatherDescription.includes('rain')) {
            alertMessage = 'Bring an umbrella! It might rain.';
        } else if (weatherDescription.includes('cloud')) {
            alertMessage = 'Partly cloudy weather.';
        } else if (weatherDescription.includes('clear')) {
            alertMessage = 'Clear skies. Enjoy the sunshine!';
        } else {
            alertMessage = 'Weather conditions are normal.';
        }

        // Display alert message
        if (alertMessage) {
            alert(alertMessage);
        }
    }
});


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

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://roniasunny2003:<ariyilla>@cluster0.gixqnqr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

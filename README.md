# Live Weather App 🌤️

This is a simple weather application that displays real-time weather information for any city using the OpenWeather API. Users can input the name of a city and get the current temperature, humidity, weather description, and an icon representing the current weather conditions.

## Features 🔍

- 🌡️ **Current Temperature**: Displays the current temperature for the selected city.
- 💧 **Humidity**: Shows the current humidity level of the city.
- ☁️ **Weather Description**: Provides a description of the current weather conditions (e.g., clear sky, scattered clouds).
- 🎨 **Dynamic Background Color**: Changes the background color based on the weather condition (e.g., blue for cloudy, yellow for sunny).
- ☀️ **Weather Icons**: Shows a matching icon for the weather condition.

## Technologies Used ✨

- **HTML**
- **CSS**
- **JavaScript**
- **OpenWeather API**

## How to Use ❓

1. **Clone this repository**:
   ```bash
   git clone https://github.com/dorukhanbekdur/live-weather-app.git

2. **Clone this repository**:
   ```bash
   cd live-weather-app
   
3. **Open `index.html` in your browser**:
   
4. **Enter the name of a city in the input field and click the "Get Weather" button to see the current weather information.**:

## Project Structure 🧬
```graphql
live-weather-app/
├── index.html          # Main HTML file that structures the app interface
├── style.css           # CSS file for styling the weather card and background
├── script.js           # JavaScript file to fetch and display weather data
└── README.md           # Documentation file explaining the app
```
## API Key Setup 🔑

To fetch weather data from the OpenWeather API, you need an API key. Follow these steps to set it up:

1. **Create an OpenWeather Account**:
   - Go to the [OpenWeather website](https://openweathermap.org/) and sign up for a free account.
   
2. **Generate an API Key**:
   - Once you’re logged in, navigate to the "API keys" section in your account settings.
   - Generate a new API key and copy it.

3. **Add Your API Key to the Project**:
   - Open the `script.js` file in your project.
   - Locate the following line in the file:
     ```javascript
     const apiKey = 'YOUR_API_KEY';
     ```
   - Replace `'YOUR_API_KEY'` with the API key you copied from OpenWeather:
     ```javascript
     const apiKey = 'your_actual_api_key_here';
     ```

4. **Save and Run**:
   - Save the changes to `script.js`.
   - Now you’re ready to fetch live weather data! Enter a city name in the app and click "Get Weather" to see the results.

> **Note**: Be sure to keep your API key secure. Avoid sharing it publicly or including it in repositories without protecting it.

## Screenshot 📷
![Screenshot_1](https://github.com/user-attachments/assets/39e9b2c0-5484-4913-94be-8df18bae9f85)

## Screenshot 📷
![Screenshot_2](https://github.com/wilson3682/Live-WeatherApp/blob/main/Screenshot%202025-01-07%20154735.png)

## Screenshot 📷
![Screenshot_3](https://github.com/wilson3682/Live-WeatherApp/blob/main/Screenshot%202025-01-07%20155246.png)



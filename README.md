# Weather App

## Overview
This simple weather app provides current weather information based on the user's input location. It utilizes APIs to fetch weather data and present it in a user-friendly interface.

## Features
Displays current weather conditions including temperature, humidity, wind speed, etc.
Take the user's location as input to provide accurate weather information.
If the input location is faulty then provide a 404 error page.

## Technologies Used
* HTML5
* CSS3
* JavaScript (ES6+)
* OpenWeatherMap API (for weather data)

## Setup Instructions
1. Clone this repository to your local machine.
1. Obtain an API key from OpenWeatherMap by signing up on their website.
1. Inside ./Assets/Javascript/index.js, replace 'YOUR_API_KEY' with your actual API key:
```javascript
const apiKey = 'YOUR_API_KEY';
```
1. Open index.html in a web browser or serve it using a local server.

## Usage
Upon opening the app, you can manually search for weather in any locations by entering the city name in the search bar and hitting Enter or Search icon.
The app will display the current weather along with additional details like humidity, and wind speed, etc.

## Credits
This app utilizes the OpenWeatherMap API to fetch weather data.

## Screenshots

Index page:-
![Search Page](https://github.com/Kanishk9/Weather-app/assets/42390255/af4b0c19-5c17-4a4b-a5ec-1884a005e0e8)

Weather Details page:-
![Weather Page](https://github.com/Kanishk9/Weather-app/assets/42390255/3b0ffcca-4bed-417c-a037-28438d430984)

404 Error page:-
![404 Page](https://github.com/Kanishk9/Weather-app/assets/42390255/d8359274-2639-4a02-9a3f-a31d05948832)



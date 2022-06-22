Create an application in React Native where the application will:
When the user opens the application, the user sees a form that contains one text
input and a submit button. Use Enter country as a placeholder text in the text
input form field.
The submit button is disabled if text input is empty.
When the user enters a country name or partial country name in the input field
and presses submit, make a call to
https://restcountries.eu/rest/v2/name/{{FORM_INPUT_HERE}}
The user is taken to a screen that now displays the information about the country.
Display the following information:
- capital
- population
- latlng
- flag (render the image from the URL provided in the response)
On the country information page, add a button called Capital Weather.
When the user clicks the `Capital Weather` button, the current weather for the city
is displayed. Display the following information:
- temperature
- weather_icons (render the image from the URL provided in the response)
- wind_speed
- precip
To get weather information, sign up for a free account on
https://weatherstack.com/. After you sign up you will receive an API key.
Use the following API to get city weather data.
http://api.weatherstack.com/current?
access_key={{YOUR_ACCESS_KEY}}&query ={{ENTER CAPITAL CITY HERE}}
Generate APK and IPA files.
async function getWeather() {
  const city = document.getElementById("city").value;

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`,
  );

  const data = await response.json();

  document.getElementById("result").innerHTML =
    `Temperature: ${data.main.temp} °C`;
}

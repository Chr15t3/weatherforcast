const key = "7dbce4d7631afea06995539cbbe4901a"

function UpdateScreen(dados) {
  console.log(dados)
  document.querySelector(".city").innerHTML = "Tempo em " + dados.name
  document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
  document.querySelector(".text-prev").innerHTML = dados.weather[0].description
  document.querySelector(".umid").innerHTML = dados.main.humidity + "%"
  document.querySelector(
    ".img-prev"
  ).src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function SearchCity(city) {
  const dados = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
  ).then((response) => response.json())

  UpdateScreen(dados)
}

function ClickButton() {
  const city = document.querySelector(".input-city").value

  SearchCity(city)
}

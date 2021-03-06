$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemp()
  getLocation()
  // window.setInterval(getLocation, 10000 }

  $.get("/temperature", function(response) {
      thermostat.temp = Number(response)
    updateTemp()
  })

  function sendState() {
    var temperature = { temperature: thermostat.temp }
    $.post("/temperature", temperature)
  }

  $("#temperature-up").on('click', function() {
    thermostat.up();
    sendState()
    updateTemp()
  })

  $('#temperature-down').click(function() { 
    thermostat.down();
    sendState()
    updateTemp()
  })

  $("#temperature-reset").click(function() {
    thermostat.resetTemp()
    updateTemp()
  })

  $("#power-saving-on").click(function() {
    thermostat.powerSaveOn()
    $("#power-saving-status").text('On')
    updateTemp()
  })

  $("#power-saving-off").click(function() {
    thermostat.powerSaveOff()
    $("#power-saving-status").text('Off')
    updateTemp()
  })

  function updateTemp() {
    $('#temperature').text(thermostat.getTemp());
    $("#temperature").attr('class', thermostat.usage())
  }

  function getLocation() {
     navigator.geolocation.watchPosition(showPosition) 
  }
  
  function showPosition(position)
    {
      latitude = (position.coords.latitude)
      longitude = (position.coords.longitude)
      $.get('http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
        var currentTemp = data.main.temp
        var weatherDescription = data.weather[0].description
        var city = data.name
        $('#current-temp').text(currentTemp);
        $('#current-weather').text(weatherDescription);
        $('#current-location').text(city);
      })
    }
})

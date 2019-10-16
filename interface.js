$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemp()

  $("#temperature-up").on('click', function() {
    thermostat.up();
    updateTemp()
  })

  $('#temperature-down').click(function() { // this is an alternate version of .on('click'), with a sprinkle of jQuery syntactic sugar
    thermostat.down();
    $('#temperature').text(thermostat.getTemp());
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

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    currentTemp = data.main.temp
    var weatherDescription = data.weather[0].description
    $('#current-temp').text(currentTemp);
    $('#current-desc').text(weatherDescription);
  })


  function updateTemp() {
    $('#temperature').text(thermostat.getTemp());
    $("#temperature").attr('class', thermostat.usage())
  }
})

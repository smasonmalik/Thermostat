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
    updateTemp()
  })

  $("#power-saving-off").click(function() {
    thermostat.powerSaveOff()
    updateTemp()
  })

  function updateTemp() {
    $('#temperature').text(thermostat.getTemp());
    $("#temperature").attr('class', thermostat.usage())
  }
})

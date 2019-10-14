var Thermostat = function() {
  this.temp = 20
};

Thermostat.prototype.getTemp = function () {
  return this.temp
};

Thermostat.prototype.up = function () {
  this.temp += 1
};

Thermostat.prototype.down = function () {
  if (this.temp > 10) {
    this.temp -= 1
  }
};

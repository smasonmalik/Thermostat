var Thermostat = function() {
  this.MIN_TEMP = 10
  this.powerSave = true
  this.temp = 20
};

Thermostat.prototype.getTemp = function () {
  return this.temp
};

Thermostat.prototype.up = function () {
  this.temp += 1

};

Thermostat.prototype.down = function () {
  if (this.isMinTemp() === false) {
    this.temp -= 1
  }
};

Thermostat.prototype.isMinTemp = function() {
  return this.temp === this.MIN_TEMP;
};

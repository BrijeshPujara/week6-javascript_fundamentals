class Thermostat {
  constructor() {
    this.temperature = 20;
    this.savingMode = true;
  }
  setPowerSavingMode(savingMode) {
    let input = savingMode;

    if (this.savingMode === input) {
      this.savingMode = true;
      return this.savingMode;
    } else {
      this.savingMode = false;
      return this.savingMode;
    }
  }

  getTemperature() {
    if (this.savingMode === true && this.temperature > 25) {
      return `Power Saving mode is on, temperature capped at: ${25} degrees`;
    } else if (this.savingMode === false && this.temperature > 32) {
      return `Power Saving mode is off, maximum temperature is: ${32} degrees`;
    } else {
      return `Current temperature: ${this.temperature}`;
    }
  }

  up() {
    return (this.temperature += 1);
  }
  down() {
    if (this.temperature > 10) {
      return (this.temperature -= 1);
    }
  }

  reset() {
    return (this.temperature = 20);
  }
}

module.exports = Thermostat;

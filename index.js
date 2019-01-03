function produceDrivingRange(range) {
  return function(block1, block2) {
    let regNumb = Math.abs(block1.slice(0,2) - block2.slice(0,2));
    if (regNumb > range) {
      return `${Math.abs(regNumb - range)} blocks out of range`
    }
    else {
      return `within range by ${Math.abs(regNumb - range)}`
    }
  };
}

function produceTipCalculator(percent) {
  return function(fare) {
    return fare * percent;
  };
}

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  };
}

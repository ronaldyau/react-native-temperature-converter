const UNITS = {
    celsius: "°C",
    fahrenheit: "°F"
}

function convertTemperature(temperature, unitToConvertTo) {
    if (unitToConvertTo === UNITS.celsius) {
        return (temperature - 32) * 5/9;
    } else if (unitToConvertTo === UNITS.fahrenheit) {
        return (temperature * 9/5) + 32
    } else {
        throw new Error("Invalid unit provided.");
    }
}

function getOppositeUnit(unit) {
    if (unit === UNITS.celsius){
        return UNITS.fahrenheit;
    } else if (unit === UNITS.fahrenheit) {
        return UNITS.celsius;
    } else {
        throw new Error("Invalid unit provided.")
    }
}

function isFreezing(temperature, unit) {
    if (unit === UNITS.celsius) {
        return temperature <= 0;
    } else if (unit === UNITS.fahrenheit) {
        return temperature <= 32;
    } else {
        throw new Error("Invalid unit provided.")
    }
}

export { UNITS, convertTemperature, getOppositeUnit, isFreezing }

 
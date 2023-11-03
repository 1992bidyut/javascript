//Skip distance
function skipDistance(frequency, foF2, hIonosphere) {
    // Kermack-McKendrick equation
    const c = 3 * 10 ** 8; // speed of light in meters per second
    const mu = 4 * Math.PI * 10 ** -7; // permeability of free space
    const epsilon = 8.854 * 10 ** -12; // permittivity of free space
    const skipDistance = (c / frequency) * (foF2 / (frequency * (1 - (foF2 / frequency) * 2) * 0.5)) * (Math.log((hIonosphere + hIonosphere) / (2 * epsilon / (mu * frequency))));
    console.log(skipDistance)
    return skipDistance;
}

const frequency = 25*10**6; // frequency of the radio wave in Hz
const foF2 = (6*10**6)*.8; // maximum frequency that can be reflected by the ionosphere in Hz
const hIonosphere = 140000; // height of the ionosphere in meters
let result = skipDistance(frequency, foF2, hIonosphere);
console.log(`Skip distance: ${result/1000} Km`);

//Ground wave
function hfGroundWaveRange(frequency, antennaHeight) {
    const k = 1.24 * Math.pow(frequency, 0.23);
    return k * Math.sqrt(antennaHeight);
}

let ground_frequency = 30.0; // in MHz
let antennaHeight = 10; // in meters

let hfRange = hfGroundWaveRange(ground_frequency, antennaHeight);

console.log(`HF Ground Wave Range: ${hfRange} km`);


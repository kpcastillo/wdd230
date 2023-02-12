
//f = 35.74 + 0.6215t − 35.75s^0.16 + 0.4275ts^0.16
// f is the wind chill factor in Fahrenheit, t is the air average temperature in Fahrenheit, 
// s is the wind speed in miles per hour.

const t = parseInt(document.querySelector('#temperature.h1')).value
const s = parseInt(document.querySelector('#temperature.h2')).value

if (t <=50 && s >3.0){
    const windChill = 35.74 + 0.6215*t - 35.75*s^0.16 + 0.4275*ts^0.16
    document.querySelector('#windchill').innerHTML = windChill
}
else{
    document.querySelector('#windchill').innerHTML = 'N/A'
}
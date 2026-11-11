/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const lengthData = document.getElementById("length-data")
const volumeData = document.getElementById("volume-data")
const massData = document.getElementById("mass-data")


function conversion(){
    const inputEl = document.getElementById("current-value")
    const number = Number(inputEl.value)
    const metersToFeet = number * 3.281
    const feetToMeters = number / 3.281
    
    const litersToGallons = number * 0.264
    const gallonsToLiters = number / 0.264
    
    const kiloToPounds = number * 2.204
    const poundsToKilo = number / 2.204
    
    
    lengthData.textContent = `${inputEl.value} meters = ${metersToFeet.toFixed(3)} feet | ${inputEl.value} feet = ${feetToMeters.toFixed(3)} meters`
    
    volumeData.textContent = `${inputEl.value} liters = ${litersToGallons.toFixed(3)} gallons | ${inputEl.value} gallons = ${gallonsToLiters.toFixed(3)} liters`
    
    massData.textContent = `${inputEl.value} kilos = ${kiloToPounds.toFixed(3)} pounds | ${inputEl.value} pounds = ${poundsToKilo.toFixed(3)} kilos`
}





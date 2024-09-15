function convertTemperature() {
    let temperature = document.getElementById('temperature').value;
    let unit = document.getElementById('unit').value;
    let result = document.getElementById('result');

    if (unit === 'Fahrenheit') {
        // Convert Fahrenheit to Celsius
        let celsius = (temperature - 32) * (5 / 9);
        result.value = `${celsius.toFixed(4)} °C`;
    } else if (unit === 'Celsius') {
        // Convert Celsius to Fahrenheit
        let fahrenheit = (temperature * 9 / 5) + 32;
        result.value = `${fahrenheit.toFixed(4)} °F`;
    } else {
        result.value = 'Invalid Input';
    }
}

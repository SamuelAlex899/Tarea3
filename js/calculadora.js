function convertirCelsiusToFahrenheit() {
    let celsius = document.getElementById("celsiusInput").value;
    let resultado = (celsius * 9/5) + 32;
    document.getElementById("resultado").innerHTML = celsius + " grados Celsius son " + resultado.toFixed(2) + " grados Fahrenheit.";
}

function convertirFahrenheitToCelsius() {
    let fahrenheit = document.getElementById("fahrenheitInput").value;
    let resultado = (fahrenheit - 32) * 5/9;
    document.getElementById("resultado").innerHTML = fahrenheit + " grados Fahrenheit son " + resultado.toFixed(2) + " grados Celsius.";
}

function borrar() {
    let fahrenheitInput = document.getElementById('fahrenheitInput').value = '';
    let celsiusInput = document.getElementById('celsiusInput').value = '';
    let resultado = document.getElementById('resultado').innerHTML = '';
}
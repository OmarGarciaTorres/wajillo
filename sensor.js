// sensor.js

document.addEventListener("DOMContentLoaded", function () {
    // Simulación del gráfico de barras LED
    const ledBar = document.getElementById("led-bar");
    const numLEDs = 10; // Cambia esto según tu configuración de LED
    const activeLEDs = 5; // Cambia esto para ajustar el número de LED activos

    // Calcula el ancho de cada LED activo en función del número total de LED y LED activos
    const activeLEDWidth = (100 / numLEDs) * activeLEDs;

    // Establece el ancho del div de la barra LED
    ledBar.style.width = `${activeLEDWidth}%`;

    // Cambia el color de los LEDs
    if (activeLEDs >= 8) {
        ledBar.style.backgroundColor = "green";
    } else if (activeLEDs >= 5) {
        ledBar.style.backgroundColor = "yellow";
    } else if (activeLEDs >= 2) {
        ledBar.style.backgroundColor = "orange";
    } else {
        ledBar.style.backgroundColor = "red";
    }
});

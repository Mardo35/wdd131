// Scripts for Week 03 assignment

// last date modified
document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;


// Current year
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent =  currentYear;


//  Static statis values

const temperature = 10;
const windSpeed   = 5;

// 2. Define the calculateWindChill function (single line of code)
const calculateWindChill = (temp, speed) => 
    (13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16))).toFixed(1);

// 3. Logic to check conditions and update the UI
const displayWindChill = () => {
    const windChillElement = document.getElementById("wind-chill");

    // Condition: Temperature <= 10 °C AND Wind speed > 4.8 km/h
    if (temperature <= 10 && windSpeed > 4.8) {
        const factor = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = `${factor} °C`;
    } else {
        windChillElement.textContent = "N/A";
    }
};

// 4. Run the function when the page loads
window.addEventListener("load", displayWindChill);
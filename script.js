// ------ Part 1 -- Declaring variables and constant ------
// ------ Part 1.1 -- Declaring constant



// ------ Part 1.2 -- Declaring variable
// Declare variables for energy display
let energyCountJS = 0;
let energyPerSecondJS = 0;
let generatorCountJS = 0;
let costAutoEnergyJS = 10;

// ------ Part 2 -- General Functions ------
// ------ Part 2.1 -- Sequence Functions ------
   
// ------ Part 2.2 --  General Functions ------

// Manual generate energy
function manualEnergy() {
    energyCountJS++;
}

// Add event listener to the manual energy button
document.getElementById("manualEnergy").addEventListener("click", manualEnergy);

// Auto generate energy
function autoEnergy() {
    const baseCost = 10; // Base cost of the generator
    const price = baseCost * Math.pow(1.15, generatorCountJS + 1); // Calculate the price based on the formula
  
    if (energyCountJS >= price) {
        energyCountJS = energyCountJS - price;
        energyPerSecondJS++;
        generatorCountJS++;
    }
  
    document.getElementById("generatorCount").textContent = "You have: " + generatorCountJS;
    document.getElementById("costAutoEnergy").textContent = "Cost: " + Math.round(price * 10) / 10;
  }


// Add event listener to the auto energy button
document.getElementById("autoEnergy").addEventListener("click", autoEnergy);

// ------ Part 3 -- Update Statistics ------
// Update energy count in HTML
function updateEnergyCount() {
    energyCountJS = energyCountJS + energyPerSecondJS/10;
    document.getElementById("energyCount").textContent = "You have " + Math.round(energyCountJS * 10) / 10 + " energy.";
}

// Update energy per second in HTML
function updateEnergyPerSecond() {
    document.getElementById("energyPerSecond").textContent = "You generate " + Math.round(energyPerSecondJS) + " energy every second.";
}

// ------ Part 4 -- Run functions ------
// Execute both functions every 100ms
setInterval(updateEnergyCount, 100);
setInterval(updateEnergyPerSecond, 100);
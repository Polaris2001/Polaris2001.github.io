// ------ Part 1 -- Declaring variables and constant ------
// ------ Part 1.1 -- Declaring constant



// ------ Part 1.2 -- Declaring variable
// Declare variables for energy display
let energyCountJS = 0;
let energyPerSecondJS = 0;
let generatorCountJS = 0;

// ------ Part 2 -- General Functions ------
// ------ Part 2.1 -- Sequence Functions ------

function generateSequence(n) {
    const sequence = [10]; // Start with the first term x1 = 10
    
    for (let i = 2; i <= n; i++) {
      const term = sequence[i - 2] + (i - 1); // Calculate xn using the formula
      sequence.push(term);
    }

    return sequence;
}
   
// ------ Part 2.2 --  General Functions ------

// Manual generate energy
function manualEnergy() {
    energyCountJS++;
}

// Add event listener to the manual energy button
document.getElementById("manualEnergy").addEventListener("click", manualEnergy);

// Auto generate energy
function autoEnergy() {
    
    energyPerSecondJS++;
    generatorCountJS++;
    document.getElementById("generatorCount").textContent = "You have: " + generatorCountJS;
}

// Add event listener to the auto energy button
document.getElementById("autoEnergy").addEventListener("click", autoEnergy);

// ------ Part 3 -- Update Statistics ------
// Update energy count in HTML
function updateEnergyCount() {
    energyCountJS = energyCountJS + energyPerSecondJS/10;
    document.getElementById("energyCount").textContent = "You have " + Math.round(energyCountJS) + " energy.";
}

// Update energy per second in HTML
function updateEnergyPerSecond() {
    document.getElementById("energyPerSecond").textContent = "You generate " + Math.round(energyPerSecondJS) + " energy every second.";
}

// ------ Part 4 -- Run functions ------
// Execute both functions every 100ms
setInterval(updateEnergyCount, 100);
setInterval(updateEnergyPerSecond, 100);
// Declare variables for energy display
let energyCountJS = 0;
let energyPerSecondJS = 0;

// Declare variables for energy generation
let autoGenerateJS = false;
let autoGeneratorJS = 0;

// Update energy count in HTML
function updateEnergyCount() {
  document.getElementById("energyCount").textContent = "You have " + energyCountJS + " energy.";
}

// Update energy per second in HTML
function updateEnergyPerSecond() {
  document.getElementById("energyPerSecond").textContent = "You generate " + energyPerSecondJS + " energy per second.";
}

// Run both functions every 100ms
function updateEnergyDisplayUI() {
  updateEnergyCount();
  updateEnergyPerSecond();
}
setInterval(updateEnergyDisplayUI, 100);

// Manual generate energy
function manualEnergy(){
    energyCountJS++;
}
document.getElementById("manualEnergy").addEventListener("click", manualEnergy)

function autoEnergy(){

}
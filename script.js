// Declare variables for energy display
let energyCountJS = 0;
let energyPerSecondJS = 0;

// Manual generate energy
function manualEnergy() {
  energyCountJS++;
  updateEnergyCount();
}

// Update energy count in HTML
function updateEnergyCount() {
  document.getElementById("energyCount").textContent = "You have " + energyCountJS + " energy";
}

// Update energy per second in HTML
function updateEnergyPerSecond() {
  document.getElementById("energyPerSecond").textContent = "You generate " + energyPerSecondJS + " energy every second.";
}

// Run both functions every 100ms
function updateEnergyDisplayUI() {
  updateEnergyCount();
  updateEnergyPerSecond();
}

document.getElementById("manualEnergy").addEventListener("click", manualEnergy);
setInterval(updateEnergyDisplayUI, 100);
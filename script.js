 // Declare variables for energy display
  let energyCountJS = 0;
  let energyPerSecondJS = 0;

  // Update energy count in HTML
  function updateEnergyCount() {
    document.getElementById("energyCount").textContent = "You have " + energyCountJS + " energy.";
  }

  // Update energy per second in HTML
  function updateEnergyPerSecond() {
    document.getElementById("energyPerSecond").textContent = "You generate " + energyPerSecondJS + " energy every second.";
  }

  // Manual generate energy
  function manualEnergy() {
    energyCountJS++;
    updateEnergyCount(); // Update the energy count in the HTML
  }

  // Add event listener to the manual energy button
  document.getElementById("manualEnergy").addEventListener("click", manualEnergy);

  // Call the updateEnergyPerSecond function initially
  updateEnergyPerSecond();

  // Run the updateEnergyCount function every second (1000ms)
  setInterval(function () {
    energyCountJS += energyPerSecondJS;
    updateEnergyCount();
  }, 1000);
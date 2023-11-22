 // ------ Part 1 -- Declaring variables ------
 // Declare variables for energy display
  let energyCountJS = 0;
  let energyPerSecondJS = 0;
 

  // ------ Part 2 -- General Functions ------
  // Manual generate energy
  function manualEnergy() {
    energyCountJS++;
  }

  // Add event listener to the manual energy button
  document.getElementById("manualEnergy").addEventListener("click", manualEnergy);


  // ------ Part 3 -- Update Statistics ------
  // Update energy count in HTML
  function updateEnergyCount() {
    document.getElementById("energyCount").textContent = "You have " + energyCountJS + " energy.";
  }

  // Update energy per second in HTML
  function updateEnergyPerSecond() {
    document.getElementById("energyPerSecond").textContent = "You generate " + energyPerSecondJS + " energy every second.";
  }

  // ------ Part 4 -- Run functions ------
  // Execute both function every 100ms
  setInterval(updateEnergyCount, 100);
  setInterval(updateEnergyPerSecond, 100);


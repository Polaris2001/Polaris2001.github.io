// Declare variables
var energyCount = 10;
var energyPerSec = 0;
var dim1Count = 0;
var dim1EnergyPerSec = 0;

// Declare constants
const numberDisplay = document.getElementById('numberDisplay');
const dim1Display = document.getElementById('dim1Count');

// Update energy displayed on the main panel every 100ms
function updateEnergyCount() {
    energyCount += energyPerSec / 10;
    numberDisplay.textContent = 'You have ' + energyCount + ' energy. (' + energyPerSec + '/s)';
}

// Update dimension 1 data when it is bought
function dim1Update()　{
    dim1Count++;
    energyPerSec++;
    dim1Display.textContent = 'You have: ' + dim1Count;
};

setInterval(updateEnergyCount, 100);
dim1Display.onclick = dim1Update();
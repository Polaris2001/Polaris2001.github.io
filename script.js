function updateTime() {
    var currentTime = new Date();
    var utcOffset = 8; // UTC+8
    var localTime = new Date(currentTime.getTime() + (utcOffset * 60 * 60 * 1000));
    var minutes = localTime.getMinutes();
    var seconds = localTime.getSeconds();
    var timeString = localTime.getHours().toString().padStart(2, '0') + ":" +
        minutes.toString().padStart(2, '0') + ":" + seconds.toString().padStart(2, '0');
    var timeUntilArrival = 5 - (minutes % 5); // Calculate time until next train arrival

    document.getElementById("current-time").textContent = timeString;
    document.getElementById("time-until-arrival").textContent = timeUntilArrival + "min";
    document.getElementById("train-type").textContent = "Local";
    document.getElementById("destination").textContent = "Station B";
    document.getElementById("remarks").textContent = "None";

    setTimeout(updateTime, 1000);
}

updateTime();
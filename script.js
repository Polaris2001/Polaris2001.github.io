function updateTime() {
    var currentTime = new Date();
    var utcOffset = 8; // UTC+8
    var localTime = new Date(currentTime.getTime() + (utcOffset * 60 * 60 * 1000));
    var hours = localTime.getHours().toString().padStart(2, '0');
    var minutes = localTime.getMinutes().toString().padStart(2, '0');
    var seconds = localTime.getSeconds().toString().padStart(2, '0');
    var timeString = hours + ":" + minutes + ":" + seconds;

    document.getElementById("current-time").textContent = timeString;

    // Calculate time until next train arrival
    var currentMinutes = localTime.getMinutes();
    var timeUntilNextTrain = 5 - (currentMinutes % 5);
    var secondsLeft = (60 - localTime.getSeconds()) % 60;
    var timeLeftString = timeUntilNextTrain + "m " + secondsLeft + "s";

    document.getElementById("time-left").textContent = timeLeftString;

    setTimeout(updateTime, 1000);
}

updateTime();
function attachEventsListeners() {
    let dayButton = document.getElementById("daysBtn");
    let hoursButton = document.getElementById("hoursBtn");
    let minutesButton = document.getElementById("minutesBtn");
    let secondsButton = document.getElementById("secondsBtn");
    dayButton.addEventListener('click', () => {
        let days = document.getElementById("days").value;
        let hours = days*24;
        let minutes = days*1440;
        let seconds = days*86400;
        document.getElementById("hours").value=hours;
        document.getElementById("minutes").value=minutes;
        document.getElementById("seconds").value=seconds;
    });
    hoursButton.addEventListener('click', () => {
        let hours = document.getElementById("hours").value;
        let days = hours/24;
        let minutes = days*1440;
        let seconds = days*86400;
        document.getElementById("days").value=days;
        document.getElementById("minutes").value=minutes;
        document.getElementById("seconds").value=seconds;
    });
    minutesButton.addEventListener('click', () => {
        let minutes = document.getElementById("minutes").value;
        let days = minutes/1440;
        let hours = days*24;
        let seconds = days*86400;
        document.getElementById("hours").value=hours;
        document.getElementById("days").value=days;
        document.getElementById("seconds").value=seconds;
    });
    secondsButton.addEventListener('click', () => {
        let seconds = document.getElementById("seconds").value;
        let days = seconds/86400;
        let hours = days*24;
        let minutes = days*1440;
        document.getElementById("days").value=days;
        document.getElementById("hours").value=hours;
        document.getElementById("minutes").value=minutes;
        
    });
}
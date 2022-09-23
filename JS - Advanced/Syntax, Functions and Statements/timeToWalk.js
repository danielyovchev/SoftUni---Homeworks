function solve(steps, length, speed){
    let road = steps*length;
    let speedPerSec = speed/3.6;
    let time = road/speedPerSec;
    let bonus = Math.floor(road/500);
    let minutes = Math.floor(time/60);
    let seconds = Math.round(time - (minutes*60));
    let hours = Math.floor(time/3600);
    console.log((hours < 10 ? "0" : "") + hours + ":" + (minutes + bonus < 10 ? "0" : "") + (minutes + bonus) + ":" + (seconds < 10 ? "0" : "") + seconds);
}
solve(4000, 0.60, 5);
solve(2564, 0.70, 5.5);
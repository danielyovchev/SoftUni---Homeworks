function solve(speed, area){
    let speedLimit;
    switch (area) {
        case 'motorway':
            speedLimit = 130;
            break;
        case 'interstate':
            speedLimit = 90;
            break;
        case 'city':
            speedLimit = 50;
            break;
        case 'residential':
            speedLimit = 20;
            break;
        default:
            break;
    }
    let overSpeed = speed - speedLimit;
    let status;
    if(overSpeed  <= 0) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
        return
    }
    else if(overSpeed > 0 && overSpeed <= 20) {
         status = 'speeding';
    }
    else if(overSpeed <= 40) {
         status = 'excessive speeding';
    }
    else {
         status = 'reckless driving';
    }
    console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
}
solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
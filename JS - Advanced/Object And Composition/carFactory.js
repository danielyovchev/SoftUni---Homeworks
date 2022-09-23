function solve(input){
    let car = {
        model: input.model,
        engine: {},
        carriage: {
            type: input.carriage,
            color: input.color
        },
        wheels: []
    };
    let size=input.wheelsize;
    if(size%2==0){
        size-=1;
    }
    for (let i = 0; i < 4; i++) {
        car.wheels.push(size);
    }
    
    if(input.power<=90){
        car.engine.power=90;
        car.engine.volume=1800;
    }
    else if(input.power>90 && input.power<=120){
        car.engine.power=120;
        car.engine.volume=2400;
    }
    else if(input.power>120){
        car.engine.power=200;
        car.engine.volume=3500;
    }
    return car;
}
solve({ model: 'Opel Vectra',

power: 110,

color: 'grey',

carriage: 'coupe',

wheelsize: 17 })
function solve(input, criteria){
    let data = [];
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    for(let elem of input){
        let arr = elem.split("|");
        data.push(new Ticket(arr[0], +arr[1], arr[2]));
    }
    switch (criteria) {
        case "destination":
            data.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
        case "price":
            data.sort((a, b) => a.price > b.price);
            break;
        case "status":
            data.sort((a, b) => a.status.localeCompare(b.status));
            break;
        default:
            break;
    }
    return data;
}
solve(['Philadelphia|94.20|available',

'New York City|95.99|available',

'New York City|95.99|sold',

'Boston|126.20|departed'],

'destination');
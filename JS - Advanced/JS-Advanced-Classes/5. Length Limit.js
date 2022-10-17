class Stringer {
    constructor(string, length) {
        this.string = string;
        this.length = length;
        this.innerString = string;
        this.innerLength = length;
    }
    
    increase(num){
        return this.length+=num;
    };
    decrease(num){
        this.length-=num;
        if(this.length<0){
            this.length=0;
        }
        return;
    };
    toString() {
        if(this.length>this.innerLength){
            return this.innerString.slice(0, this.length);
        }
        if(this.length == 0){
            return ".".repeat(3);
        }
        let diff = this.innerLength - this.length;
        let result = this.innerString.slice(0, this.length) + ".".repeat(diff);
        return result;
    };
}
let test = new Stringer("Test", 5);

console.log(test.toString()); // Test

test.decrease(3);

console.log(test.toString()); // Te...

test.decrease(5);

console.log(test.toString()); // ...

test.increase(4);

console.log(test.toString()); // Test
function add(num){
    let total=num;
    function sum(b){
        total+=b;
        return sum;
    }
    sum.toString = () => total;
    return sum;
}

console.log(add(4)(3).toString())
//add(1)(6)(-3);
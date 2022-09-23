function solve(num){
    let flag = true;
    let digits = num.toString().split('');
    let sum = Number(digits[0]);
    for(let i = 1; i<digits.length; i++){
        sum+=Number(digits[i]);
        if(digits[i] != digits[0]){
            flag=false;
        }
    }
    console.log(flag);
    console.log(sum);
}
solve(2222222);
solve(1234);
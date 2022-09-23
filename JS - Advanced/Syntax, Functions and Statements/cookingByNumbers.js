function solve(num, op1, op2, op3, op4, op5){
    let operations = [op1, op2, op3, op4, op5];
    let result = num;
    for (let i = 0; i < 5; i++) {
        switch (operations[i]) {
            case 'chop':
                result /=2;
                break;
            case 'dice':
                result = Math.sqrt(result);
                break;
            case 'spice':
                result +=1;
                break;
            case 'bake':
                result *=3;
                break;
            case 'fillet':
                result -= result*0.2;
                break;
            default:
                break;
        }
        console.log(result);
    }
}
solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
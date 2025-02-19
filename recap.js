function add(price1 , price2){
    return price1 + price2 ;
}

const bill = add(20 , 80);
console.log("The bill is",bill,"TK");

function doMath(num1, num2){
    const sum = num1 + num2;
    const diff = num1 - num2;
    const multiply = sum * diff;
    const result = multiply/2;
    return result;
}

const result = doMath(3 , 5);
console.log("The result is :", result);
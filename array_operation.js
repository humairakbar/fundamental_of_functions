/**
 * Write a function to give the sum of all number in an array
 * 1/ Declare a funtion 
 * 2/ Call check whether a function is called properly
 * 3/ Set a parameter(s)
 * 4/ Pass a parameter(s), check if the parameter is passed in proper format 
 * 5/ Do the funtion tasks (step by step)
 */

function sumOfNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        console.log(number);
        sum = sum + number;
    }
    return sum;

}
nums = [42, 32, 45, 67];
const sum = sumOfNumbers(nums);
console.log("The sum of the numbers in the array is :", sum);
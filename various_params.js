function evenStringSize(str){
    const size = str.length;
    console.log(str, size);
    if(size % 2 === 0){
        console.log("String is even sized!");
        return true;
    }
    else{
        console.log("String odd sized!");
        return false;
    }
}

// evenStringSize('Dhaka');
// evenStringSize('Chittagong');

function doDoubleOrTriple(num, doDouble){
    if(doDouble === true){
        const result = num * 2;
        return result;
    }
    else{
        const result = num * 3;
        return result;
    }
}

// console.log(doDoubleOrTriple(5 , true));
// console.log(doDoubleOrTriple(5 , false));

function array(numbers){
    const len = array.length;
    return len;
}

array([1,2,3,4,5]);
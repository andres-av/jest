// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))


let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen = function (dollar) {
    let yen = dollar * 106.5; 
    return yen;
};

const fromEuroToDollar = function (euro) {
    let dollar = euro * 1.2; 
    return dollar;
};

const fromYanToPound = function (yen) {
    let pound = yen * 0.006; 
    return pound;
};


// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum , fromDollarToYen , fromEuroToDollar , fromYanToPound };
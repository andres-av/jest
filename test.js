// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.2 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.2 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dollars, then 3.5 euros should be = (3.5 * 1.2)
})

test("One dollar should be 106.6 yens", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its suppoed to be used
    const yen = fromDollarToYen(3.5)

    // if 1 dollar are 106.5 yens, then 3.5 dollars should be (3.5 * 106.5)
    const expected = 3.5 * 106.5; 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(3.5)).toBe(372.75); //1 dollar are 106.5 yens, then 3.5 dollar should be = (3.5 * 106.5)
})

test("One yen should be 0.006 pounds", function(){
    //import the function from app.js
    const { fromYanToPound } = require('./app.js')

    // use the function like its suppoed to be used
    const pound = fromYanToPound(1500)

    // if 1 yen are 0.006, then 1500 yens should be (1500 * 0.006)
    const expected = 1500 * 0.006; 
    
    // this is the comparison for the unit test
     expect(fromYanToPound(1500)).toBe(9); //1 yen are 0.006 pounds, then 1500 yens should be = (1500 * 0.006)
})
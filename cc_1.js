// U89173488

// 1. Initial logic for calculating tip using ternary operator
let bill = 100; // enter bill amount
let tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;



console.log(`The bill was $${bill}, the tip was $${tip}, and the total value $${bill + tip}.`);

// 2. Create and test calcTip function
function calcTip(bill) {
    return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
}

// 3. Testing the function with a bill value of $100
let Testbill = 100 ;
let Testtip = calcTip(bill);
console.log(`$${Testbill + Testtip}.`);
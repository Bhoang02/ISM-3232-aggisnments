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

// 4. utilize arrays
function calcTotal(bills,tips)  {
    const Total = bills + tips
    return Total
}

const bills = [275,40,430]
// const tips = function calcTip(bills)

const tips = []
for (let i = 0; i < bills.length; i++) {
const currentTip = calcTip(bills[i])
tips.push(currentTip)
}




console.log(tips)


const totals = []
for (let i = 0; i < bills.length; i++) {
const currentTotals = calcTip(bills[i]) + bills[i]
totals.push(currentTotals)
}

console.log(totals)

//data set 2

const bills2 = [125,555,44]
// const tips = function calcTip(bills)

const tips2 = []
for (let i = 0; i < bills2.length; i++) {
const currentTip = calcTip(bills2[i])
tips2.push(currentTip)
}



console.log(tips)
console.log(tips2)

const totals2 = []
for (let i = 0; i < bills.length; i++) {
const currentTotals = calcTip(bills2[i]) + bills2[i]
totals2.push(currentTotals)
}

console.log(totals2)
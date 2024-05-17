// U89173488

// 1. Initial logic for calculating tip using ternary operator
let bill = 100; // enter bill amount
let tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;



console.log(`The bill was $${bill}, the tip was $${tip}, and the total value $${bill + tip}.`);


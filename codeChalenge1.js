const markHight = 1.69;
const markWeight = 78;

const johnHight = 1.95;
const johnWeight = 92;

let markHigherBMI;

let markBMI = Math.floor(markWeight / markHight ** 2);

let johnBMI = Math.floor(johnWeight / johnHight ** 2);
console.log(markBMI, johnBMI);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`);
} else {
    console.log(`John's ${johnBMI}  is higher than Mark's BMI ${markBMI}!`);
}

// const markHight = 1.88;
// const markWeight = 95;

// const johnHight = 1.76;
// const johnWeight = 85;

// let markHigherBMI;

// let markBMI = markWeight / markHight ** 2;

// let johnBMI = johnWeight / johnHight ** 2;
// console.log(markBMI, johnBMI);

// if (markBMI > johnBMI) {
//     console.log(markHigherBMI = true);
// } else {
//     console.log(markHigherBMI = false);
// }
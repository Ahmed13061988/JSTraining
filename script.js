// // let js = 'amazing';
// // console.log(40 + 8 + 23 - 10);


// // console.log(23);

// // let firstName = "Ahmed";
// // console.log(firstName);

// let country = "Iraq";
// let continent = "Asia";
// let population = 45000000;

// // console.log(country, continent, population);

// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);
// console.log(typeof javaScriptIsFun);
// console.log(typeof country);
// console.log(typeof population);

// javaScriptIsFun = 'YES!';
// console.log(typeof javaScriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);
// console.log(typeof null);

// const birthDate = 1988;

// var job = "programmer";
// job = "coder";
// const now = 2022;
// const ageAhmed = now - 1988;
// const ageAtyaf = now - 1995;
// console.log(ageAhmed, ageAtyaf);
// console.log(ageAhmed * 2, ageAtyaf / 10, 9 ** 3);
// // ** is the power of operator 
// const firstName = "Ahmed";
// const lastName = "Hussein";
// console.log(firstName + " " + lastName);

// let x = 10 + 5;
// x += 10;
// // x = x + 10; 
// console.log(x);
// x++;
// console.log(x);
// x--;
// console.log(x);

// console.log(ageAhmed > ageAtyaf);
// console.log(ageAhmed === ageAhmed);

// let z, y;
// z = y = 25 - 10 - 5;
// console.log(z > y);
// let avarage = (ageAhmed + ageAtyaf) / 2;
// console.log(avarage);

// const firstName = "Ahmed";
// const job = "Web developer";
// const birthYear = 1988;
// let year = 2022;
// const age = year - birthYear;
// const ahmed = "I'm " + firstName + ", a " + age + " years old " + job + "!";

// const ahmedTemplateLetteral = `I'm ${firstName}, a ${age} years old ${job}!`
// console.log(ahmedTemplateLetteral);

// console.log(ahmed);
// console.log(`hello, it's me!
//  Who are you?`);

// //or we can use 
// console.log(`Hello, it's me \n This will be in the new line`);

// //type conversion 
// const inputYear = `1991`;
// console.log(Number(inputYear) + 18);
// console.log(typeof NaN);
// console.log(String(23));

// //type coercion 
// console.log(`I'm ` + 23 + " years old");
// console.log('23' - '10' - 3);

// let n = '1' + 1; //==> "11"
// n = n - 1;  // ==> '11' - 1; 
// console.log(n); //==> 10; 

// 5 falsy values in JS 
// 0 , " ", undifined, null, NaN 
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(""));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean({}));

// const money = 0;
// if (money) {
//     console.log("Don't spend it all ;)!")
// } else {
//     console.log('You should get a job!');
// }

// let hight; // we will get else, because hight is undefined and it's falsy 
// if (hight) {
//     console.log(`YAY! Hight is defined`);
// } else {
//     console.log(`Hight is undefined`);
// }

const age = 18;
if (age === 18) console.log(` You became and adult (strict)`);
if (age == 18) console.log(` You became and adult (loose)`);
// '18' === 18 ==> false
// '18' == 18 ==> true 

const favourite = Number(prompt(`What's your favourite number?`));
console.log(typeof (favourite));
// if (favourite === 23) {
//     console.log(`It's an amazing number!`);
// } else if (favourite === 7) {
//     console.log(` 7 also a cool number!`);
// } else if (favourite === 9) {
//     console.log(` 9 also a cool number!`);
// } else {
//     console.log(` The number is not 7 or 23`);
// }
if (favourite !== 23) console.log(`Why not 23?`); 

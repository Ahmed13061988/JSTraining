// // // let js = 'amazing';
// // // console.log(40 + 8 + 23 - 10);


// // // console.log(23);

// // // let firstName = "Ahmed";
// // // console.log(firstName);

// // let country = "Iraq";
// // let continent = "Asia";
// // let population = 45000000;

// // // console.log(country, continent, population);

// // let javaScriptIsFun = true;
// // console.log(javaScriptIsFun);
// // console.log(typeof javaScriptIsFun);
// // console.log(typeof country);
// // console.log(typeof population);

// // javaScriptIsFun = 'YES!';
// // console.log(typeof javaScriptIsFun);

// // let year;
// // console.log(year);
// // console.log(typeof year);
// // console.log(typeof null);

// // const birthDate = 1988;

// // var job = "programmer";
// // job = "coder";
// // const now = 2022;
// // const ageAhmed = now - 1988;
// // const ageAtyaf = now - 1995;
// // console.log(ageAhmed, ageAtyaf);
// // console.log(ageAhmed * 2, ageAtyaf / 10, 9 ** 3);
// // // ** is the power of operator 
// // const firstName = "Ahmed";
// // const lastName = "Hussein";
// // console.log(firstName + " " + lastName);

// // let x = 10 + 5;
// // x += 10;
// // // x = x + 10; 
// // console.log(x);
// // x++;
// // console.log(x);
// // x--;
// // console.log(x);

// // console.log(ageAhmed > ageAtyaf);
// // console.log(ageAhmed === ageAhmed);

// // let z, y;
// // z = y = 25 - 10 - 5;
// // console.log(z > y);
// // let avarage = (ageAhmed + ageAtyaf) / 2;
// // console.log(avarage);

// // const firstName = "Ahmed";
// // const job = "Web developer";
// // const birthYear = 1988;
// // let year = 2022;
// // const age = year - birthYear;
// // const ahmed = "I'm " + firstName + ", a " + age + " years old " + job + "!";

// // const ahmedTemplateLetteral = `I'm ${firstName}, a ${age} years old ${job}!`
// // console.log(ahmedTemplateLetteral);

// // console.log(ahmed);
// // console.log(`hello, it's me!
// //  Who are you?`);

// // //or we can use 
// // console.log(`Hello, it's me \n This will be in the new line`);

// // //type conversion 
// // const inputYear = `1991`;
// // console.log(Number(inputYear) + 18);
// // console.log(typeof NaN);
// // console.log(String(23));

// // //type coercion 
// // console.log(`I'm ` + 23 + " years old");
// // console.log('23' - '10' - 3);

// // let n = '1' + 1; //==> "11"
// // n = n - 1;  // ==> '11' - 1; 
// // console.log(n); //==> 10; 

// // 5 falsy values in JS 
// // 0 , " ", undifined, null, NaN 
// // console.log(Boolean(0));
// // console.log(Boolean(undefined));
// // console.log(Boolean(""));
// // console.log(Boolean(null));
// // console.log(Boolean(NaN));
// // console.log(Boolean({}));

// // const money = 0;
// // if (money) {
// //     console.log("Don't spend it all ;)!")
// // } else {
// //     console.log('You should get a job!');
// // }

// // let hight; // we will get else, because hight is undefined and it's falsy 
// // if (hight) {
// //     console.log(`YAY! Hight is defined`);
// // } else {
// //     console.log(`Hight is undefined`);
// // }

// const age = 18;
// if (age === 18) console.log(` You became and adult (strict)`);
// if (age == 18) console.log(` You became and adult (loose)`);
// // '18' === 18 ==> false
// // '18' == 18 ==> true 

// const favourite = Number(prompt(`What's your favourite number?`));
// console.log(typeof (favourite));
// // if (favourite === 23) {
// //     console.log(`It's an amazing number!`);
// // } else if (favourite === 7) {
// //     console.log(` 7 also a cool number!`);
// // } else if (favourite === 9) {
// //     console.log(` 9 also a cool number!`);
// // } else {
// //     console.log(` The number is not 7 or 23`);
// // }
// if (favourite !== 23) console.log(`Why not 23?`); 

// const hasDriverLicense = true;
// const hasGoodVision = true;

// console.log(hasDriverLicense && !hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);

// const shouldDrive = hasDriverLicense && hasGoodVision;
// if (shouldDrive) {
//     console.log(`Sarah is able to drive`);
// } else {
//     console.log(`Someone else should drive`);
// }
// const isTired = true;
// console.log(hasDriverLicense && hasGoodVision && isTired);

// const shouldDrive = hasDriverLicense && hasGoodVision && !isTired;
// if (shouldDrive) {
//     console.log(`Sarah is able to drive`);
// } else {
//     console.log(`Someone else should drive`);
// }

// const dolphineAvarage = (96 + 108 + 89) / 3;
// const koalasAvarage = (88 + 91 + 110) / 3;

// if (dolphineAvarage >= 100 && koalasAvarage >= 100) {
//     if (dolphineAvarage > koalasAvarage) {
//         console.log(`Dolphine's team won the competition`)
//     } else if (dolphineAvarage < koalasAvarage) {
//         console.log(`Koalas's team won the competition`)
//     } else if (dolphineAvarage === koalasAvarage) {
//         console.log("It's a draw");
//     }
// } else {
//     console.log("No one won!");
// }

// const dolphineAvarage = (97 + 112 + 101) / 3;
// const koalasAvarage = (109 + 95 + 123) / 3;

// if (dolphineAvarage >= 100 && koalasAvarage >= 100) {
//     if (dolphineAvarage > koalasAvarage) {
//         console.log(`Dolphine's team won the competition`)
//     } else if (dolphineAvarage < koalasAvarage) {
//         console.log(`Koalas's team won the competition`)
//     } else if (dolphineAvarage === koalasAvarage) {
//         console.log("It's a draw");
//     }
// } else {
//     console.log("No one won!");
// }

// const dolphineAvarage = (97 + 112 + 101) / 3;
// const koalasAvarage = (109 + 95 + 106) / 3;

// if (dolphineAvarage >= 100 && koalasAvarage >= 100) {
//     if (dolphineAvarage > koalasAvarage) {
//         console.log(`Dolphine's team won the competition`)
//     } else if (dolphineAvarage < koalasAvarage) {
//         console.log(`Koalas's team won the competition`)
//     } else if (dolphineAvarage === koalasAvarage) {
//         console.log("It's a draw");
//     }
// } else {
//     console.log("No one won!");
// }

const day = 'Thursday';
// switch (day) {
//     case 'Monday':// day === Monday 
//         console.log('Plan course structure');
//         console.log('Go to coding meet up');
//         break;
//     case 'Tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'Wednesday':
//     case 'Thursday':
//         console.log('Write code examples');
//         break;
//     case 'Friday':
//         console.log('Recored some videos');
//         break;
//     case 'Saturday':
//     case 'Sunday':
//         console.log('Enjoy the break!!');
//     default:
//         console.log(`The day is not correct`);
// }

// if (day === 'Monday') {
//     console.log('Plan course structure');
//     console.log('Go to coding meet up');
// } else if (day === 'Tuesday') {
//     console.log('Prepare theory videos');
// } else if (day === 'Wednesday' || day === 'Thursday') {
//     console.log('Write code examples');
// } else if (day === 'Friday') {
//     console.log('Recored some videos');
// } else if (day === 'Saturday' || day === "Sunday") {
//     console.log('Enjoy the break!!');
// } else {
//     console.log('The day is not correct');
// }
// 3 + 4 // this is an expression because it produce a value
// 1991 // this is an expression as well because it will produce a value
// true && true || false // this is expression 

const age = 34;
age >= 18 ? console.log(`I like to drink wine`) : console.log(`I like to dring water`)

const drink = age >= 18 ? `Wine 🍷` : `Water 💧`;
console.log(typeof drink);

let drink2;
if (age >= 18) {
    drink2 = `Wine`;
} else {
    drink2 = `Water`;
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
// let js = 'amazing';
// if (js==='amazing') {
//     alert('JS is FUN');
// }
// console.log(12+30+42+63-35);

// const firstName = 'Esteban';
// const lastName = 'Reyes';

// console.log(firstName + '' + lastName);


//Practice #1

// console.log('Practice #1');

// const mass = 'Kg';
// const height = 'm';
// let bmiMark;
// let bmiMark1;
// let bmiJohn;
// let bmiJohn1;


// //Mark's Measure
// console.log('Mark´s Measure');

// const markWeight = 78;
// const markTall = 1.69;

// console.log('Mark weight is'+ ' ' + markWeight + mass);
// console.log('Mark tall is'+ ' ' + markTall + height);

// console.log('Mark´s 1 Measure');
// const markWeight1 = 95;
// const markTall1 = 1.88;

// console.log('Mark1 weight is'+ ' ' + markWeight1 + mass);
// console.log('Mark1 tall is'+ ' ' + markTall1 + height);



// //John's Measure
// console.log('John´s Measure');

// const johnWeight = 92;
// const johnTall = 1.95;

// console.log('John weight is'+ ' ' + johnWeight + mass);
// console.log('John tall is'+ ' ' + johnTall + height);

// console.log('John´s 1 Measure');

// const johnWeight1 = 85;
// const johnTall1 = 1.76;

// console.log('John1 weight is'+ ' ' + johnWeight1 + mass);
// console.log('John1 tall is'+ ' ' + johnTall1 + height);



// console.log('BMI Body Mass Index');

// bmiMark = (markWeight / (markTall ** 2));
// bmiJohn = (johnWeight / (johnTall ** 2));

// console.log('BMI Mark is' + ' ' + bmiMark);
// console.log('BMI John is' + ' ' + bmiJohn);



// console.log('BMI Body Mass Index 1');

// bmiMark1 = (markWeight1 / (markTall1 ** 2));
// bmiJohn1 = (johnWeight1 / (johnTall1 ** 2));

// console.log('BMI Mark is' + ' ' + bmiMark1);
// console.log('BMI John is' + ' ' + bmiJohn1);

// const markHigherBMI = bmiMark > bmiJohn;
// const markHigherBMI1 = bmiMark1 > bmiJohn1;

// if (markHigherBMI) {
//     console.log(`Mark´s BMI ${bmiMark} is bigger than John´s ${bmiJohn} BMI`)
// } else {
//     console.log(`John´s1 ${bmiJohn} BMI is bigger than Mark´s1 ${bmiMark} BMI`)
// }

// if (markHigherBMI1) {
//     console.log(`Mark´s1 BMI ${bmiMark1} is bigger than John´s1 ${bmiJohn1} BMI`)
// } else {
//     console.log(`John´s1 ${bmiJohn1} BMI is bigger than Mark´s1 ${bmiMark1} BMI`)
// }

// Practice #2

// console.log('Practice #2');

// const dolScore = 96;
// const dolScore1 = 108;
// const dolScore2 = 89;

// const koaScore = 88;
// const koaScore1 = 91;
// const koaScore2 = 110;

// const aveScoreDol = (dolScore + dolScore1 + dolScore2) / 3;

// const aveScoreKoa = (koaScore + koaScore1 + koaScore2) / 3;

// console.log(`Average score Dolphins ${aveScoreDol}`);
// console.log(`Average score Koalas ${aveScoreKoa}`);

// if (aveScoreDol && aveScoreKoa >= 100) {
//     if(aveScoreDol > aveScoreKoa){
//         console.log(`The team winner is Dolphins with ${aveScoreDol} average score`);
//     } else if(aveScoreDol < aveScoreKoa){
//         console.log(`The team winner is Koalas with ${aveScoreKoa} average score`);
//     } else if (aveScoreDol = aveScoreKoa) {
//         console.log(`draw means they have the same average score. Dolphins Team's with ${aveScoreDol} and Koalas Team's with ${aveScoreKoa}`);}
// } else {
//     console.log("No completly minimum score required")
//     }


// Practice #3

console.log('Practice #3');

const bill = 301;
const tip = (bill >= 50 && bill <= 300) ? (bill * (15/100)) : (bill * (20/100)); 

console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`);
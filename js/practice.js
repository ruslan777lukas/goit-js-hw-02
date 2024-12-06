// let i = 0;
// while (i < 10) {
//     i += 1;
//     console.log(i);
// }
// +++++++++++++++++++++++++++++++++
// let i = 1;
// while (i <= 20) {
//     if (i%2===0) {
//          console.log(i);
//     }
//     i += 1;
// }
// +++++++++++++++++++++++++++++++++
// let i = 1;
// let sum=0;
// while (i <= 100) {
//     sum += i
//     i += 1;
//     console.log(i);
// }
// console.log(sum);
// +++++++++++++++++++++++++++++++++++++
// let i = 1;
// let sum = 0;
// while (i <= 10) {
//     sum = i * 7;
//     console.log(`${i} * 7 = ${sum}`);
//     i += 1;
// }
// +++++++++++++++++++++++++++++++++++++++
// let i = 1;
// let rez = 1;
// let f = 8;
// while (i < f) {
//     rez = rez * (i+1);
//     console.log(i);
//     i += 1;
    
// }
// console.log(rez);
// +++++++++++++++++++++++++++++++++++++++++++++
// let i = 0;
// let str = "Hello world".replace(" ", "");
// while (str.length > i) {
//     i += 1;
//     if ((i % 2)>0) {
//         let sum = str[i];
//         console.log(sum);
//     }
// }
// ++++++++++++++++++++++++++++++++++++++++++++++++++
// let sum;
// let i = 0;
// let str = "Hello world".replace(" ", "");
// while (str.length > i) {
//     i += 1;
//     sum = str[str.length-i];
//     console.log(sum);
// }
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let i = 0;
// let str = "Hello world";
// while (str.length > i) {
//     if (str[i]==" ") {
//         break;
//     }
//     let sum = str[i];
//     console.log(sum);
//     i += 1;
// }
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let i = 0;
// let str = "JavaScript";
// while (str.length > i) {
//     i += 1;
//     if ((i % 2)>0) {
//         let sum = str[i];
//         console.log(sum);
//     }
// }
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function overstand(str) {
//     let sum="";
//     let i = 0;
//     while (str.length > i) {
//         i += 1;
//         sum = sum + str[str.length-i];
        
// } console.log(sum);
// }
// overstand("welcome");
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function upperstand(str) {
//     let i = 0;
//     let sum="";
//     while (str.length > i) {
//         if ((i % 2) > 0) {
//             sum = sum + (str[i]).toUpperCase();
//         } else {
//             sum = sum + str[i];
//         }
//         i += 1;
//     }
//     console.log(sum);
// }
// upperstand("revolutions")
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function getString(str1, str2, count) {
    for (i = 1; i <= count; i++){
        str1 = str1 + str2;
    }
    console.log(str1);
}
getString("слово", "Дело", 9)
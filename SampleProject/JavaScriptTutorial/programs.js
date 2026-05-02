// if any number divisiable by 1 and itself alone
/*
//   Given Number: 8
//    Exclude : 1 & 8
//     2,3,4,5,6,7
//    Given Number % (2,3,4,5,6,7)  == 0  --> It is not a prime number
// */
// let num=14008
// let flag=0
// for(let i=2;i<num;i++){
//     if(num % i == 0){
//         flag++
//     }
// }
 
// if(flag==0){
//     console.log(num+" is a Prime Number");
// }else{
//     console.log(num+" is not a Prime Number");
// }
 
// /*
//  0  1  1  2  3  5  8  13  21  34  55
//  thirdnumber=firstnumber+secondnumber
// */
 
// let fn=0
// let sn=1
// console.log(fn);
// console.log(sn);
// for(let i=1;i<=8;i++){
//     let tn=fn+sn
//     console.log(tn);
//     fn=sn
//     sn=tn
// }
 
 
 
// // 1+2+3+4+5+6+7+8+9+10 => 55
 
// let sum=0
// for(let i=1;i<=10;i++){
//     sum=sum+i
// }
// console.log("sum of Numbers :"+sum);
 
/*
    Write a program to display count of number in between 1 to 100 which are divisible by 7?
    1 to 100  -> count of number
     divisible by 7 -> count of number
*/
let count=0
for(let i=1;i<=100;i++){
    if(i % 7 ==0){
        count=count + 1
    }
}
 
console.log("Count of Numbers :"+count);
 
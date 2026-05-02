let s1 = "it is a palace"
console.log(s1.replace("palace", "aramane"))

let s2 = "welcome";
console.log(s2.repeat(5));

let s3 = "shyamala";
console.log(s3.includes("hy")); //true

let s4 = "i like bangalore"
console.log(s4.startsWith("i"));
console.log(s4.endsWith("bangalore"));

let s5 ="hello";
console.log(s5.padStart(10,"#")) //remaing characters will append either left or right based on number of characer specified
console.log(s5.padEnd(10,"#"))

let s6 = "jkashjkdaaja"
console.log(s6.indexOf('k'))

let s7 = " my name is shy"
console.log(s7.indexOf('my'))
console.log(s7.lastIndexOf('y'))
console.log(s7.lastIndexOf('name'))

let s8 = "mango,banana,apple,chikku"

//split function
let s9="Mango,Apple,Ornage,Grapes,Banana"
let fruits=s9.split(",")
for(let x of fruits){
    console.log(x);
}
console.log("-----------------------")
//trimStart --> removes blank spaces at left hand side
let s10="   Welcome     "
console.log("Before trim :"+s10.length);
console.log(s7.trimStart());
console.log("After trim :"+s10.trimStart().length);
console.log("-----------------------")
//trimEnd -> removes blank spaces at Right hand side
let s11="   Welcome     "
console.log("Before trim :"+s11.length);
console.log(s11.trimEnd());
console.log("After trim :"+s11.trimEnd().length);
console.log("-----------------------")
//trim -> removes blank spaces at both sides
let s12="   Welcome     "
console.log("Before trim :"+s12.length);
console.log(s12.trim());
console.log("After trim :"+s12.trim().length);
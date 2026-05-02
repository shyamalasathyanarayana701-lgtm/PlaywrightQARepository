//Write a program to display Even numbers from 40 to 80
let num1=40
function printEvenNumbers(){
    console.log(num1);  
    if(num1>=80){
        num2 = num1%2
        printEvenNumbers()
    }
   console.log(num2)
}
printEvenNumbers()
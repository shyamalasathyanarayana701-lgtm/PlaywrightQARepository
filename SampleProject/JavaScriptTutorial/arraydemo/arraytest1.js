let arr=[]
//assign elements
arr[0]=100
arr[1]=200
arr[2]=300
arr[3]=400
//Read Elements
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
 
//Case 2: Read Elements from an array using for Loop
//declare an array
let arr=[]
//assign elements
arr[0]=100
arr[1]=200
arr[2]=300
arr[3]=400


//Read Elements
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
 
//Case 3: Assign Elements in to an array in declaration step
//declare an array
let arr=[10,20,30,40,50]
 
//Read Elements
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
 
//Case 4: Can we read Elements from an array in reverse order
//declare an array
let arr=[10,20,30,40,50]
 
//Reverse Order
for(let i=arr.length-1;i>=0;i--){
    console.log(arr[i])
}
 
//Case 5: Can we store multiple datatype values in an array?
 
//declare an array
let arr=[10,20,30,40,50]
 
//Reverse Order
for(let i=arr.length-1;i>=0;i--){
    console.log(arr[i])
}
 
 
//Case 6: for of loop -> to read elements
//declare an array
let arr=["Mango",50,true,10.75,"Ornage",false]
 
//Read elements -> for of
 
for(let x of arr){
    console.log(x);
}
 
//case 7: for in loop -> to read elements
//declare an array
let arr=[10,20,30,40,50]
 
//Read Elements
for(let x in arr){
    console.log(arr[x])
}
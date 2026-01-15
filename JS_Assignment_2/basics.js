// variables and data types

function input( a){
    console.log(typeof(a))
}

input(10)
input("abcd")
input(true)
input(undefined)
input({})
input()


let a;
console.log(a);        
console.log(typeof a); 

let b = null;
console.log(b);        
console.log(typeof b); 


function add(a,b){
    console.log(a+b)
}
add(2,5)

const addition =(a,b)=>{
    console.log(a+b)
}
addition(2,3)

console.log(5=="5")
console.log(null==undefined)
console.log(5==="5")
console.log(null===undefined)





const text = "hello world";

const titleCase = text
  .split(" ")
  .map(word => word[0].toUpperCase() + word.slice(1))
  .join(" ");

console.log(titleCase);

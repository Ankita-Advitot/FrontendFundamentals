//1 
function printName() {

    if (true) {
      var name = "Akshay";
  
    }
    console.log(name);
  }
  printName(); 
   //2 

let age = "18";

 

if (age === 18) {

  console.log("Adult");

} else {

  console.log("Minor");

}
// 3
const arr = [10, 20, 30];
for (let i = 0; i <arr.length; i++) {

  console.log(arr[i]);

}
// 4
let data;
setTimeout(() => {

  data = "Loaded";

}, 1000);
console.log(data);
 let data;

setTimeout(() => {
  data = "Loaded";
  console.log(data);
}, 1000);
//5
function add(a, b) {

    return a + b;
  
  }
  
   
  
  const result = add(2, 3);
  
  console.log(result);
  
   //6

  const user = {

    name: "John",
  
    age: 25,
  
  };
  
   
  
  function updateAge(u) {
  
    u.age = 30;
  
  }
  
   
  
  updateAge(user);
  
  console.log(user.age);
  
   
//7
fetch("https://api.example.com/data")
  .then((res) => {
    res.json();
  })
  .then((data) => {
    console.log(data);
  });

  const nums = [1, 2, 3, 4];

  const result = nums.map(n => {
  
    if (n % 2 === 0) {
  
      return n * 2;
  
    }
    return n
  });  
  console.log(result);
  
  // 8
  const person = {
    name: "Amar",
    greet(){
  
      console.log("Hello " +this.name);
    },
  
  };
  
  person.greet();
const user = {

    name: "Akshay",
    age: 25,  
    city: "Pune"
  
};

console.log(user.name)
console.log(user.age)
console.log(user.city)

console.log("--------------------------")

const { name, age } = user;

console.log(name)
console.log(age)
console.log("--------------------------")



let arr1=[1,2,3]
let arr2=[4,5,6]
let merged=[...arr1,...arr2]
console.log(merged)

console.log("--------------------------")

function sum(...numbers){
    total_sum=0
    numbers.forEach(num=>{
        total_sum+=num
    })
    return total_sum
}

console.log("Total Sum is ",sum(1,2,3,4,5))
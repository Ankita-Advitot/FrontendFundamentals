

let arr=[20, 4, 23, 56, 1, 23, 65, 78, 45, 3, 9, 6, 23, 1, 50]

let multiple=arr.map(n=>{
    return n*2
})
console.log("Elememts Multiplied by 2 ",multiple)

let filtered=arr.filter(n=> n>10)
console.log("Elememts greater than 10 ",filtered)

let total_sum = arr.reduce((total,num)=>{
   return total+num
},0)

console.log("Total Sum ",total_sum)

console.log("-------------Reverse An Array-----------")

let i=0,j=arr.length-1
while(i<=j){
    let temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
    i++
    j--
}

console.log(arr)
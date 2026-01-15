let user={
    name:"Ankita",
    age:21,
    city:"Solapur"
}

Object.keys(user).forEach(key=>{
    console.log(key);
});
console.log("--------------------------------------")
Object.values(user).forEach(value=>{
    console.log(value);
});
console.log("--------------------------------------")

Object.keys(user).forEach(key => {
    console.log(key + " : " + user[key]);
  });
console.log("--------------------------------------")
  
user.mobileNumber=9876545678
Object.keys(user).forEach(key => {
    console.log(key + " : " + user[key]);
  });

console.log("--------------------------------------")
delete user.city

Object.keys(user).forEach(key => {
    console.log(key + " : " + user[key]);
  });

  const users = [
    { name: "A", role: "admin" },
    { name: "B", role: "user" },
    { name: "C", role: "admin" },
    { name: "D", role: "user" }
  ];

const group=users.reduce((res,curr)=>{
  const role=curr.role
  if(!res[role])
    res[role]=[];
  res[role].push(curr)
  return res
},{});

Object.keys(group).forEach(role => {
  console.log("Role:", role);

  group[role].forEach(user => {
    console.log(user);
  });
});


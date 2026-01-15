function getUserData(userId) {
    return new Promise((resolve, reject) => {
      if (userId === 1) {
        resolve({
          name: "Ankita",
          age: 24,
          city: "Pune"
        });
      } else if (userId === 0) {
        reject("Invalid user ID");
      }
    });
  }

  
  getUserData(1)
  .then((user) => {
    console.log("User data:", user);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

getUserData(0)
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

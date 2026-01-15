async function getUserData(userId) {
  if (userId === 1) {
    return {
      name: "Ankita",
      age: 24,
      city: "Pune"
    };
  } else if (userId === 0) {
    throw "Invalid user ID";
  }
}
async function fetchUser() {
  try {
    const user = await getUserData(0);
    console.log("User data:", user);
  } catch (error) {
    console.log("Error:", error);
  }
}
fetchUser();

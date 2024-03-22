let username, password;
username = "Admin";
password = "qwerty";
const isSuccess = true;
const isFailed = false;
if (username === "Admin" && password === "qwerty") {
  console.log(isSuccess);
} else if (username === "Admin" && password !== "qwerty") {
  console.log(isFailed);
} else if (username !== "Admin" && password === "qwerty") {
  console.log(isFailed);
} else {
  console.log(isSuccess);
}

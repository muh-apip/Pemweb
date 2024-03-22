let username, password;
username = "Admin";
password = "qwerty";
const isSuccess = true;
const isFailed = false;
if (username === "Admin") {
  if (password === "qwerty") {
    console.log(isSuccess);
  } else {
    console.log(isFailed);
  }
} else if (password === "qwerty") {
  console.log(isFailed);
} else {
  console.log(isFailed);
}

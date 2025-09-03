let userCount = 0;
let allUsers = {};

function addUser(x, y) {
  let user = { userName: x, password: y };
  userCount++;
  allUsers[userCount] = user;
}
addUser("man", "passwd");
addUser("man1", "passwd");
addUser("man2", "passwd");
addUser("man3", "passwd");
addUser("man4", "passwd");
console.log(allUsers);

delete allUsers[3];
console.log(allUsers);

function checkAvailibility(x) {
  if (allUsers[x] == undefined) {
    console.log("User " + x + " is available");
  } else if (allUsers[x] != undefined) {
    console.log("User " + x + " is taken");
  }
}
checkAvailibility(3);

window.onclose = function () {
  localStorage.setItem("allUsers", JSON.stringify(allUsers));
  localStorage.setItem("userCount", userCount);
};
window.onload = function () {
  if (localStorage.getItem("allUsers") !== null) {
    allUsers = JSON.parse(localStorage.getItem("allUsers"));
    userCount = parseInt(localStorage.getItem("userCount"));
  }
  console.log(allUsers);
  console.log(userCount);
};

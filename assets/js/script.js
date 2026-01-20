/* ESERCIZIO 1 */
const label = document.getElementById("user-label");

const showUsername = function () {
  if (localStorage.getItem("saved-user") !== null) {
    label.innerText = `${localStorage.getItem("saved-user")}`;
  }
};

const saveFunction = function () {
  const inputUserValue = document.getElementById("username").value;
  console.log(inputUserValue);
  localStorage.setItem("saved-user", inputUserValue);
  showUsername();
};

const saveButton = document.getElementById("save");
saveButton.addEventListener("click", saveFunction);

const deleteFunction = function () {
  if (localStorage.getItem("saved-user") !== null) {
    localStorage.removeItem("saved-user");
    label.innerText = ``;
  }
};

const deleteButton = document.getElementById("delete");
deleteButton.addEventListener("click", deleteFunction);

showUsername();

/* ESERCIZIO 2 */

let secondsPassed;
if (sessionStorage.getItem("saved-seconds") !== null) {
  secondsPassed = parseInt(sessionStorage.getItem("saved-seconds"));
} else {
  secondsPassed = 0;
}

const timer = document.getElementById("timer");
timer.innerText = `${secondsPassed}`;

setInterval(function () {
  secondsPassed = secondsPassed + 1;
  timer.innerText = `${secondsPassed}`;
  sessionStorage.setItem("saved-seconds", secondsPassed);
}, 1000);

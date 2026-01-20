console.log("Hello, world!");

/* ESERCIZIO 1 */

const showUsername = function () {
  const label = document.getElementById("user-label");
  if (localStorage.getItem("saved-user") !== null) {
    label.innerText = `${localStorage.getItem("saved-user")}`;
  }
};

const saveFunction = function () {
  const inputUserValue = document.getElementById("username").value;
  console.log(inputUserValue);
  localStorage.setItem("saved-user", inputUserValue);
  const label = document.getElementById("user-label");
  label.innerText = `${localStorage.getItem("saved-user")}`;
};

const saveButton = document.getElementById("save");
saveButton.addEventListener("click", saveFunction);

const deleteFunction = function () {
  if (localStorage.getItem("saved-user") !== null) {
    localStorage.removeItem("saved-user");
    const label = document.getElementById("user-label");
    label.innerText = ``;
  }
};

const deleteButton = document.getElementById("delete");
deleteButton.addEventListener("click", deleteFunction);

showUsername();

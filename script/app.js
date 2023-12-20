const createNode = document.querySelector(".createbtn");
const loginNode = document.querySelector(".loginbtn");
const registerDivNode = document.querySelector(".register");
const loginDivNode = document.querySelector(".login");
const headerNode = document.querySelector(".img");
const backNode = document.querySelector(".back");
const backLogNode = document.querySelector(".backlog");
const regLogNode = document.querySelector(".registerlogin");
const logRegNode = document.querySelector(".loginregister");
const formNode = document.querySelector(".inputs");
const allInputs = document.querySelectorAll("input");
console.log(allInputs);
let error = false;
formNode.addEventListener("submit", (e) => {
  e.preventDefault();
  error = false;
  for (const input of allInputs) {
    submitInput(input, true);
    input.value = "";
    if (allInputs[3].value != allInputs[2].valuse) {
      label.textContent = `Пароли не совпадают`;
    }
  }
  if (!error) console.log("submit");
});
function collection(allInputs) {
  for (const input of allInputs) {
    input.addEventListener("input", () => submitInput(input));
  }
}

function submitInput(input, submit) {
  const label = input.parentNode.querySelector(".labels");
  label.textContent = "";

  let summ = input.value;
  console.log(allInputs[1].value);
  console.log(allInputs[3].value);
  if (input.dataset.required && input.value === "") {
    label.textContent = `Поле не заполнено`;
    if (submit) error = true;
  } else {
    if (summ.length <= input.dataset.minLength && summ.length > 0) {
      label.textContent = `Минимальное количество символов:${input.dataset.minLength}`;

      if (submit) error = true;
    } else if (summ.length >= input.dataset.maxLength) {
      label.textContent = `Максимальное количество символов:${input.dataset.maxLength}`;

      if (submit) error = true;
    }
  }
}

function displayRegNone() {
  registerDivNode.classList.toggle("displaynone");
  registerDivNode.classList.toggle("transform");
}

function displayLogNone() {
  loginDivNode.classList.toggle("displaynone");
  loginDivNode.classList.toggle("transformlog");
}
function opacity() {
  headerNode.classList.toggle("opacity");
}

function clickBtnHandler() {
  displayRegNone();
  opacity();
}
function clickBtnLogHandler() {
  opacity();
  displayLogNone();
}
function clickRegLogHandler() {
  clickBtnHandler();
  clickBtnLogHandler();
}
function clickLogRegHandler() {
  clickBtnLogHandler();
  clickBtnHandler();
}
collection(allInputs);
regLogNode.addEventListener("click", clickRegLogHandler);
logRegNode.addEventListener("click", clickLogRegHandler);
createNode.addEventListener("click", clickBtnHandler);
backNode.addEventListener("click", clickBtnHandler);
backLogNode.addEventListener("click", clickBtnLogHandler);
loginNode.addEventListener("click", clickBtnLogHandler);

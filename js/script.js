"use strict";

const result = document.querySelector("#result");
const resultsContainer = document.querySelector(".result-container");
const bodyElement = document.querySelector("body");
const firstThemeButton = document.querySelector("#theme-1");
const secondThemeButton = document.querySelector("#theme-2");
const thirdThemeButton = document.querySelector("#theme-3");

let num1;
let num2;
let operator = null;

const saveThemeToLocalStorage = (selectedTheme) => {
  localStorage.setItem("theme", selectedTheme);
};

const changeTheme = (theme) => {
  bodyElement.classList = theme;

  if (theme === "theme-3") {
    resultsContainer.classList = "result-container theme-3-screen-bg";
  } else {
    resultsContainer.classList = "result-container";
  }

  saveThemeToLocalStorage(theme);
};

const loadThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("theme");

  switch (theme) {
    case "theme-1":
      firstThemeButton.checked = true;
      resultsContainer.classList = "result-container";
      break;
    case "theme-2":
      secondThemeButton.checked = true;
      resultsContainer.classList = "result-container";
      break;
    case "theme-3":
      thirdThemeButton.checked = true;
      resultsContainer.classList = "result-container theme-3-screen-bg";
      break;
    default:
      break;
  }

  bodyElement.classList = theme;
};

const showNumbersOnScreen = (number) => {
  if (number === ".") number = ",";
  if (operator === null) {
    num1 = result.textContent + number;
    result.textContent = num1;
  } else {
    num2 = result.textContent + number;
    result.textContent = num2;
  }
  console.log([num1, num2]);
};

const setOperators = (op) => {
  result.textContent = "";
  operator = op;
  console.log([num1, num2]);
};

const getResult = () => {
  let final;
  const modifiedDotNum1 = num1.replace(",", ".");
  const modifiedDotNum2 = num2.replace(",", ".");
  switch (operator) {
    case "+":
      final = Number(modifiedDotNum1) + Number(modifiedDotNum2);
      break;
    case "-":
      final = Number(modifiedDotNum1) - Number(modifiedDotNum2);
      break;
    case "/":
      final = Number(modifiedDotNum1) / Number(modifiedDotNum2);
      break;
    case "*":
      final = Number(modifiedDotNum1) * Number(modifiedDotNum2);
      break;
  }
  num1 = final.toString().replace(".", ",");
  num2 = null;
  operator = null;
  result.textContent = num1;
  console.log([num1, num2]);
};

const reset = () => {
  num1 = null;
  num2 = null;
  operator = null;
  result.textContent = "";
};

const deleteNumbers = () => {
  result.textContent = result.textContent.slice(0, -1);
  if (operator === null) num1 = num1.slice(0, -1);
  else num2 = num2.slice(0, -1);
  console.log([num1, num2]);
};

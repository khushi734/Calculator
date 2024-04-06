const sunIcon = "images/SunIcon.svg";
const moonIcon = "images/MoonIcon.svg";
const lightTheme = "styles/light.css";
const darkTheme = "styles/dark.css";
const themeIcon = document.getElementById("theme-icon");
const result = document.getElementById("result");
const toast = document.getElementById("toast");

// Swaps the stylesheet to toggle between dark and light mode.
function changeTheme() {
  const theme = document.getElementById("theme");
  setTimeout(() => {
    toast.innerHTML = "Calculator";
  }, 1500);
  if (theme.getAttribute("href") === lightTheme) {
    theme.setAttribute("href", darkTheme);
    themeIcon.setAttribute("src", sunIcon);
    toast.innerHTML = "Dark Mode 🌙";
  } else {
    theme.setAttribute("href", lightTheme);
    themeIcon.setAttribute("src", moonIcon);
    toast.innerHTML = "Light Mode ☀️";
  }
}

// Function to calculate the result
function calculate (value) {
  
  if(value.includes('²')){
    value = value.replace('²', "");
    value = value + '*' + value
  }
  
  const calculatedValue = eval(value || null);
  if (isNaN(calculatedValue)) {
    result.value = "Error";
    setTimeout(() => {
      result.value = "";
    }, 1500);
  } else {
    result.value = calculatedValue;
  }
}

// Displays entered value on screen.
function displayValue(enteredValue) {
  if (!result.value) {
    result.value = "";
  }
  result.value += enteredValue;
}

//Adding event handler on the document to handle keyboard inputs
document.addEventListener("keydown", keyboardInputHandler);

//Function to handle keyboard inputs
function keyboardInputHandler(e) {
  e.preventDefault();

  //Appending numbers typed by user
  if (e.key === "0") {
    result.value += "0";
  } else if (e.key === "1") {
    result.value += "1";
  } else if (e.key === "2") {
    result.value += "2";
  } else if (e.key === "3") {
    result.value += "3";
  } else if (e.key === "4") {
    result.value += "4";
  } else if (e.key === "5") {
    result.value += "5";
  } else if (e.key === "6") {
    result.value += "6";
  } else if (e.key === "7") {
    result.value += "7";
  } else if (e.key === "7") {
    result.value += "7";
  } else if (e.key === "8") {
    result.value += "8";
  } else if (e.key === "9") {
    result.value += "9";
  }

  //Appending operators
  if (e.key === "+") {
    result.value += "+";
  } else if (e.key === "-") {
    result.value += "-";
  } else if (e.key === "*") {
    result.value += "*";
  } else if (e.key === "/") {
    result.value += "/";
  }
  else if (e.key === "%") {
    result.value += "%";
  }

  //Appending decimal key
  if (e.key === ".") {
    result.value += ".";
  }

  //Press enter to get result
  if (e.key === "Enter") {
    calculate(result.value);
  }

  //Backspace for removing the last typed input
  if (e.key === "Backspace") {
    result.value = result.value.substring(0, result.value.length - 1);
  }
}

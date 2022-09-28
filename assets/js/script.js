// target form
const formElement = document.querySelector("#login-form");

// target form inputs
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

//  target the feedback message
const msgDiv = document.querySelector("#msg");

// target the last registered user elements
const userEmailSpan = document.querySelector("#user-email");
const userPasswordSpan = document.querySelector("#user-password");

const renderLastRegisteredUser = function (lastRegisteredUser) {};

const getDataFromLocalStorage = function () {
  // get data from Local Storage by key name
  const data = JSON.parse(localStorage.getItem("lastRegisteredUser"));

  if (!data) {
    // set local storage with default value {} return {}
    localStorage.setItem("lastRegisteredUser", JSON.stringify({}));
    return {};
  } else {
    // else return the parsed data from local storage
    return data;
  }
};

const renderError = function (errorMessage) {
  msgDiv.textContent = errorMessage;
};

// on submit event handler function
const handleSubmit = function (event) {
  event.preventDefault();

  console.log("submit");

  // get data from local storage
  const lastRegisteredUser = getDataFromLocalStorage();
  console.log(lastRegisteredUser);

  // get the user input values
  const email = emailInput.value;
  const passwoord = passwordInput.value;

  //validation
  if (!email) {
    // render error message
    renderError("Please enter a valid email");
    return;
  }

  if (!password) {
    // render error message
    renderError("Please enter a valid password");
    return;
  }

  // update the data from local storage

  // set local storage with updated data

  // render last registered user with local storage data
  renderLastRegisteredUser(lastRegisteredUser);
};

// on load event handler function
const handleLoad = function () {
  // get data from local storage
  const lastRegisteredUser = getDataFromLocalStorage();

  // render only if oject is not empty
  if (lastRegisteredUser.email && lastRegisteredUser.password) {
    // render last registered user with local storage data
    renderLastRegisteredUser(lastRegisteredUser);
  }
};

// add event listener on form for submit event
formElement.addEventListener("submit", handleSubmit);

// add event listener for window load
window.addEventListener("load, handleLoad");

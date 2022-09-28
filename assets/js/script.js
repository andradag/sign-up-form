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

// on submit event handler function
const handleSubmit = function (event) {
  event.preventDefault();

  console.log("submit");

  // get data from local storage

  // update the data from local storage

  // set local storage with updated data
};

// add event listener on form for submit event
formElement.addEventListener("submit", handleSubmit);

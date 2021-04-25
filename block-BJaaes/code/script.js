let form = document.querySelector(".form");
let errorMessage = "";

function checkNumber(value) {
  let a = value.split("").some((e) => Number(e));
  return a;
}

function handleSubmit(event) {
  event.preventDefault();
  let userName = event.target.username;
  let name = event.target.name;
  let email = event.target.email;
  let number = event.target.number;
  let password = event.target.password;
  let confirmPassword = event.target.cpassword;
  if (checkNumber(name.value)) {
    errorMessage = "You can't use number in the name field";
    name.nextElementSibling.innerText = errorMessage;
  } else {
    errorMessage = "";
    name.nextElementSibling.innerText = errorMessage;
  }
  if (userName.value.length < 4) {
    errorMessage = `${userName.value} can't be less than 4 characters`;
    userName.nextElementSibling.innerText = errorMessage;
  } else {
    errorMessage = "";
    userName.nextElementSibling.innerText = errorMessage;
  }
  if (email.value.length < 6) {
    errorMessage = "Not a valid email";
    email.nextElementSibling.innerText = errorMessage;
  } else {
    errorMessage = "";
    email.nextElementSibling.innerText = errorMessage;
  }
  if (number.value.length < 7) {
    errorMessage = "phone number can't be less than 7";
    number.nextElementSibling.innerText = errorMessage;
  } else {
    errorMessage = "";
    number.nextElementSibling.innerText = errorMessage;
  }
  if (password.value !== confirmPassword.value) {
    errorMessage = "Password and confirm password must be same.";
    confirmPassword.nextElementSibling.innerText = errorMessage;
  }
}

form.addEventListener("submit", handleSubmit);

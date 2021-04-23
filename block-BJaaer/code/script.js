let form = document.querySelector("form");
let modal = document.querySelector(".modal");
let close = document.querySelector(".close");
let uName = document.querySelector(".name");
let uEmail = document.querySelector(".email");
let uLove = document.querySelector(".love");
let uColor = document.querySelector(".color");
let uRating = document.querySelector(".rating");
let uBook = document.querySelector(".book");
let displayTerms = document.querySelector(".terms");

let userInfo = {};

function handleInput(event) {
  event.preventDefault();
  userInfo.name = event.target.text.value;
  uName.innerText = userInfo.name;

  userInfo.email = event.target.email.value;
  uEmail.innerText = userInfo.email;

  userInfo.love = event.target.gender.value;
  uLove.innerText = userInfo.love;

  userInfo.color = event.target.color.value;
  uColor.innerText = userInfo.color;

  userInfo.rating = event.target.range.value;
  uRating.innerText = userInfo.rating;

  userInfo.book = event.target.drone.value;
  uBook.innerText = userInfo.book;
  userInfo.terms = event.target.terms.value;
  if (userInfo.terms === "on") {
    displayTerms.innerText = "You agree to Terms and Conditions";
  } else {
    displayTerms.innerText = "";
  }
  form.style.display = "none";
  modal.style.display = "flex";
}
// console.log(userInfo);
form.addEventListener("submit", handleInput);

close.addEventListener("click", () => {
  modal.style.display = "none";
  form.style.display = "block";
});

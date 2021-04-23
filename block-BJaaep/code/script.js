function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

let firstBoxes = document.querySelectorAll(".boxes-1");
firstBoxes.forEach((element, index) => {
  element.addEventListener("click", (event) => {
    event.target.innerText = getRandomNumber(12);
    setTimeout(() => {
      event.target.innerText = "";
    }, 5000);
  });
});

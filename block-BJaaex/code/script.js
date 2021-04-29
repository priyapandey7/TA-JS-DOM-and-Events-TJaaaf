let mGame = [
  {
    name: "shell",
    img:
      "https://upload.wikimedia.org/wikipedia/en/6/60/Mario_Kart_Blue_Shell.png",
  },
  {
    name: "star",
    img:
      "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/socialmedia/apple/271/star_2b50.png",
  },
  {
    name: "bobomb",
    img:
      "https://i.pinimg.com/originals/55/f4/4a/55f44abd127cff24e4d19dfe23bff737.png",
  },
  {
    name: "mario",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiwgmHM2LBfw7gcg-K7nGlPlGw8BFwYdj_2w&usqp=CAU",
  },
];
let date;
let selected = 0;
let count = 0;
let firstGuess = "";
let secondGuess = "";
let previousSelected = null;

let scoreCard = document.querySelector(".score-card");
let noOfCount = document.querySelector(".count");
let timeTakenToCompleteTheGame = document.querySelector(".time-taken");

const game = document.getElementById("game");

const grid = document.createElement("section");

grid.setAttribute("class", "grid");

game.appendChild(grid);

mGame = mGame.concat(mGame).sort(() => 0.5 - Math.random());

mGame.forEach((item) => {
  const card = document.createElement("div");
  let imgEle = document.createElement("img");
  card.classList.add("card");
  card.dataset.name = item.name;
  imgEle.src = item.img;

  imgEle.classList.add("hidden");
  card.append(imgEle);
  grid.appendChild(card);
});

grid.addEventListener("click", (e) => {
  console.log(previousSelected);
  if (e.target.nodeName !== "DIV") {
    return;
  }
  date = date ? date : new Date();
  e.target.firstElementChild.classList.remove("hidden");
  e.target.firstElementChild.classList.add("show");
  if (e.target === previousSelected) {
    console.log(previousSelected, "Ps");
    return;
  }

  if (selected < 2) {
    selected++;
    e.target.classList.add("selected");

    if (selected === 1) {
      previousSelected = e.target;
      firstGuess = e.target.dataset.name;
    }
    if (selected === 2) {
      count++;
      secondGuess = e.target.dataset.name;

      setTimeout(() => {
        e.target.firstElementChild.classList.remove("show");
        e.target.firstElementChild.classList.add("hidden");
        previousSelected.firstElementChild.classList.remove("show");
        previousSelected.firstElementChild.classList.add("hidden");
        if (firstGuess === secondGuess) {
          document
            .querySelectorAll(".selected")
            .forEach((selected) => selected.classList.add("match"));
          checkGameOver();
        }
        reset();
      }, 1000);
      console.log(previousSelected, "Outside");
    }
  }
});

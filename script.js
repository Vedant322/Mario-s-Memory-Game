let counter = 0;
let firstSelection = "";
let secondSelection = "";
let currentTime = 32;
let timerId = null;
let result = 0;

const timeleft = document.querySelector(".time-left");
const score = document.querySelector(".score");
const start = document.querySelector(".start");
const cards = document.querySelectorAll(".cards .card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.add("clicked");

    if (counter === 0) {
      firstSelection = card.getAttribute("pokemon");
      counter++;
    } else {
      secondSelection = card.getAttribute("pokemon");
      counter = 0;

      if (firstSelection === secondSelection) {
        const correctCards = document.querySelectorAll(
          ".card[pokemon='" + firstSelection + "']"
        );

        audio3.play();
        correctCards[0].classList.add("checked");
        correctCards[0].classList.remove("clicked");
        correctCards[1].classList.add("checked");
        correctCards[1].classList.remove("clicked");

        result++;
        result++;
        result++;
        result++;
        result++;
        result++;
        result++;
        result++;
        result++;
        result++;
        result++;
        result++;
        console.log(result);
        score.textContent = result;
      } else {
        audio2.play();
        const incorrectCards = document.querySelectorAll(".card.clicked");

        incorrectCards[0].classList.add("shake");
        incorrectCards[1].classList.add("shake");

        setTimeout(() => {
          incorrectCards[0].classList.remove("shake");
          incorrectCards[0].classList.remove("clicked");
          incorrectCards[1].classList.remove("shake");
          incorrectCards[1].classList.remove("clicked");
        }, 800);
      }
    }
  });
});

// CountDown
function countDown() {
  currentTime--;
  timeleft.textContent = currentTime;
  
  if (currentTime == 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    audio4.play();
    alert("GAME OVER! Your final score is: " + result);
    gsap.to(".up", 1, {
      x: "2000",
      ease: Expo.easeInOut,
      stagger: 0.2,
    });
    gsap.to(".mid-1", 1, {
      x: "-2000",
      ease: Expo.easeInOut,
      stagger: 0.2,
    });
    gsap.to(".mid-2", 1, {
      x: "2000",
      ease: Expo.easeInOut,
      stagger: 0.2,
    });
    gsap.to(".down", 1, {
      x: "-2000",
      ease: Expo.easeInOut,
      stagger: 0.2,
    });
  }
}
let countDownTimerId = setInterval(countDown, 1000);

const audio1 = new Audio();
audio1.src = "./sounds/fireball.wav";

const audio2 = new Audio();
audio2.src = "./sounds/fireworks.wav";

const audio3 = new Audio();
audio3.src = "./sounds/coin.wav";

const audio4 = new Audio();
audio4.src = "./sounds/gameover.wav";

const audio5 = new Audio();
audio5.src = "./sounds/flagpole.wav";

gsap.from(".up", 1.5, {
  opacity: 0,
  x: "-2000",
  stagger: 0.2,
  ease: Expo.easeInOut,
});
gsap.from(".mid-1", 1.6, {
  opacity: 0,
  x: "2000",
  stagger: 0.2,
  ease: Expo.easeInOut,
});
gsap.from(".mid-2", 1.7, {
  opacity: 0,
  x: "-2000",
  stagger: 0.2,
  ease: Expo.easeInOut,
});
gsap.from(".down", 1.8, {
  opacity: 0,
  x: "2000",
  stagger: 0.2,
  ease: Expo.easeInOut,
});
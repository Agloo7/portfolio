const words = document.querySelectorAll(".word");
words.forEach(word => {
  const letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach(letter => {
    const span = document.createElement("span");
    span.textContent = letter;
    word.append(span);
  });
});

let currentWordIndex = 0;
const maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

const changeText = () => {
  const currentWord = words[currentWordIndex];
  const nextWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
  const nextWord = words[nextWordIndex];

  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80);
  });

  nextWord.style.opacity = "1";
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter behind";
    setTimeout(() => {
      letter.className = "letter in";
    }, 340 + i * 80);
  });

  currentWordIndex = nextWordIndex;
};

changeText();
setInterval(changeText, 3000);



document.addEventListener("DOMContentLoaded", () => {
  const circles = document.querySelectorAll(".circle");
  circles.forEach(elem => {
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots * marked / 100);
    var points = "";
    var rotate = 360 / dots;

    for (let i = 0; i < dots; i++) {
      points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for (let i = 0; i < percent; i++) {
      pointsMarked[i].classList.add('marked');
    }
  });
});


//mix it up portfolio
var mixer = mixitup('.portfolio-gallery')



// Active menu
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');


function activeMenu(){
  let len = section.length;
  while(--len && window.scrollY * 97 < section[len].offsetTop){}
  menuLi.forEach(sec => sec.classList.remove("active"));
  menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);



document.querySelector('#menu-icon').addEventListener('click', () => {
  document.querySelector('.navlist').classList.toggle('open');
});








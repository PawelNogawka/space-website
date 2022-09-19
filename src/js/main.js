const nav = document.querySelector(".nav");
const navBtn = document.querySelector(".nav__btn");
const header= document.querySelector(".header")

navBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});


window.addEventListener("scroll",function(){
  if(window.scrollY>0){
    header.classList.add("active")
  }else{
    header.classList.remove("active")
  }
})


//counter

const tiles = document.querySelectorAll(".about__counter-tile");
const counter = document.querySelector(".about__counter");

let count = true;

window.addEventListener("scroll", startCount);

function startCount(e) {
  if (window.scrollY >= counter.offsetTop - 300) {
    if (count) {
      tiles.forEach((tile) => {
        function upddateCounter() {
          let heading = tile.querySelector("h3");
          let target = parseInt(heading.getAttribute("data-target"));
          let initialTxt = +heading.innerText;
          let increment = target / 200;
          if (initialTxt < target) {
            heading.innerText = `${Math.ceil(initialTxt + increment)}`;
            setTimeout(upddateCounter, 20);
          } else {
            heading.innerText = target;
          }
        }

        upddateCounter();
      });
    }
    count = false;
  }
}

///  missions

const img = document.querySelector(".missions__img");

const jj = document.querySelector(".missions__title");

const info = document.querySelector(".missions__info");

const missions = [
  {
    title: "we want to colonize mars",
    photo: "./dist/images/mission1.jpg",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,rerum sunt qui quia ullam, perspiciatis accusantium delectusfugit aperiam ipsam eaque dolorem temporibus explicabo corporis",
  },
  {
    title: "lorem ipsum dolor",
    photo: "./dist/images/mission2.jpg",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum saepe assumenda repudiandae error voluptates tenetur ad accusantium, inventore doloremque unde at voluptatem recusandae accusamus atque aperiam quod dolorem adipisci? Dolorem maxime repellat quisquam vitae libero!",
  },
  {
    title: "lorem ipsum dolor si amet ",
    photo: "./dist/images/mission3.jpg",
    content:
      "Lorem ipsum dolor, Rerum saepe assumenda repudiandae error voluptates tenetur ad accusantium, inventore doloremque unde at voluptatem recusandae accusamus atque aperiam quod dolorem adipisci? Dolorem maxime repellat quisquam vitae libero!",
  },
];

let index = 1;

function changeMission() {
  const { title, photo, content } = missions[index];

  img.src = photo;
  jj.innerText = title;
  info.innerText = content;

  index++;

  if (index == missions.length) {
    index = 0;
  }
}

setInterval(changeMission, 10000);

//gallery

const gallerySection = document.querySelector(".gallery");
const slides = document.querySelectorAll(".gallery__slide");
const leftBtn = document.querySelector(".gallery__btn--left");
const rightBtn = document.querySelector(".gallery__btn--right");

let activeSlide = 0;

rightBtn.addEventListener("click", () => {
  activeSlide++;

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  if (activeSlide == slides.length - 1) {
    activeSlide = 0;
  }

  changeSlide();
  setBgToSection();
});

leftBtn.addEventListener("click", () => {
  activeSlide--;

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  changeSlide();
  setBgToSection();
});

function changeSlide() {
  slides[activeSlide].classList.add("active");
}

function setBgToSection() {
  const elStyle = getComputedStyle(slides[activeSlide]);
  console.log(elStyle.backgroundImage);

  gallerySection.style.backgroundImage = elStyle.backgroundImage;
}

// faq

const toggleBtns = document.querySelectorAll(".faq__btn");

toggleBtns.forEach((btn) => {
  btn.addEventListener("click", function() {
    this.parentElement.classList.toggle("active");
  });
});


// contact 3d form

const signUpBtn = document.querySelector(".contact__change-btn--left");
const signInBtn = document.querySelector(".contact__change-btn--right");
const box = document.querySelector(".contact__box");

signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
box.classList.add("change");
});

signInBtn.addEventListener("click", (e) => {
  e.preventDefault();
  box.classList.remove("change");
});






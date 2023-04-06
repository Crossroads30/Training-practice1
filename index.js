let sliderWrapper = document.querySelector(".slider-wrapper");
let sliderElements = document.querySelectorAll(".slider-item");

const sliderItemWidth = sliderElements[0].clientWidth;
let counter = 1;

let translation = 0;

const nextSlide = function () {
   let start = Date.now(); // запомнить время начала

   let timer = setInterval(function () {
      let timePassed = Date.now() - start;

      nextBtn.classList.add("inactive-button");

      if (timePassed > sliderItemWidth) {
         setTimeout(() => {
            nextBtn.classList.remove("inactive-button");
         }, 400);
         clearInterval(timer);
         translation = sliderItemWidth * counter;
         counter++;
         return;
      }
      draw(timePassed);
   }, 0);

   function draw(timePassed) {
      sliderElements.forEach((item) => {
         item.style.right = translation + timePassed + "px";
      });
   }
};

const prevSlide = function () {
   let start = Date.now();
   let timer = setInterval(function () {
      let timePassed = Date.now() - start;

      prevBtn.classList.add("inactive-button");

      if (timePassed > sliderItemWidth + 1) {
         setTimeout(() => {
            prevBtn.classList.remove("inactive-button");
         }, 400);
         clearInterval(timer);
         translation = sliderItemWidth * (counter - 2);
         counter--;
         return;
      }
      draw(timePassed);
   }, 0);

   function draw(timePassed) {
      sliderElements.forEach((item) => {
         item.style.right = translation - timePassed + "px";
      });
   }
};

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
//-------------------------------------------------

// const prevBtn = document.querySelector('.prev')
// const nextBtn = document.querySelector('.next')
// const outImg = document.querySelector('.slider__img')



// const art1 = 'assets/images/our-friends/pets-charly.png';
// const art2 = 'assets/images/our-friends/pets-jennifer.png';
// const art3 = 'assets/images/our-friends/pets-katrine.png';
// const art4 = 'assets/images/our-friends/pets-freddy.png';
// const art5 = 'assets/images/our-friends/pets-scarlet.png';


// const images = [art1, art2, art3, art4, art5];

// let i = 0
// outImg.innerHTML = `<img src=${images[i]}>`;

// const clickRight = () => {
//    nextBtn.onclick = () => {
//       if (i < images.length - 1) {
//          i++
//       } else {
//          i = 0
//       }
//       outImg.innerHTML = `<img src=${images[i]}>`
//    };
// };


// setInterval(function () {
//     clickRight()
// },2000);

// prevBtn.onclick = () => {
//    if (i > 0) {
//       i--
//    } else {
//       i = images.length - 1
//    }
//    outImg.innerHTML = `<img src=${images[i]}>`
// };
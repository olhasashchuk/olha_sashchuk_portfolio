(() => {
   const headerBurgerBtn = document.querySelector('.header__box-burger')
   const headerNavigation = document.querySelector('.header__nav')
   const headerCloseBtn = document.querySelector('.header__nav-close')

   headerBurgerBtn.addEventListener ('click', () => {
      headerNavigation.classList.add('active')
   })

   headerCloseBtn.addEventListener ('click', () => {
      headerNavigation.classList.remove('active')
   })
}
)();

const prevBtn = document.querySelector('.js--slider__prev');
const nextBtn = document.querySelector('.js--slider__next');
const sliderBullets =  document.querySelector('.js--slider__bullets');
const slideElements = document.querySelectorAll('.js--slider__element');
let currentIndex = 0;

function showSlide(index) {
   slideElements.forEach((slide, i) => {
      if (i === index) {
         slide.classList.add('current');
      } else {
         slide.classList.remove('current');
      }
   });
}

function nextSlide() {
   if (currentIndex < slideElements.length - 1) {
      currentIndex++;
      showSlide(currentIndex);
   }
   updateButtons();
   updateBullets();
}

function prevSlide() {
   if (currentIndex > 0) {
      currentIndex--;
      showSlide(currentIndex);
   }
   updateButtons();
   updateBullets();
}

function updateButtons() {
   prevBtn.style.display = currentIndex === 0 ? 'none' : 'flex';
   nextBtn.style.display = currentIndex === slideElements.length - 1 ? 'none' : 'flex';
}

function updateBullets() {
   sliderBullets.querySelectorAll('span').forEach(
       (item, index) => {
          item.classList.toggle('active-bullet', index === currentIndex);
       }
   )
}

function createBullets() {
   slideElements.forEach((slide, i) => {
      const bullet = document.createElement('span');
      bullet.classList.add('courses__slider-bullet');
      bullet.addEventListener('click', () => {
         currentIndex = i;
         showSlide(currentIndex);
         updateButtons();
         updateBullets();
      });
      document.querySelector('.courses__slider-bullets').appendChild(bullet);
   });
}

function initSlider() {
   // Create bullets for navigation
   createBullets();
   // Show initial slide
   showSlide(currentIndex);
   // Update button visibility
   updateButtons();
   // Update bullet state
   updateBullets();
   // Add event listeners
   prevBtn.addEventListener('click', prevSlide);
   nextBtn.addEventListener('click', nextSlide);

   //Automatic sliding
   // setInterval(() => {
   //    if (currentIndex === slideElements.length - 1) {
   //       currentIndex = 0; // Reset to the first slide
   //    } else {
   //       currentIndex++;
   //    }
   //    showSlide(currentIndex);
   //    updateButtons();
   //    updateBullets();
   // }, 3000);
}

initSlider();
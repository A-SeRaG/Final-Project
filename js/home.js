// countdown 
const countdownDate = new Date("Dec 31, 2024 23:59:59").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeRemaining = countdownDate - now;

  if (timeRemaining > 0) {
   
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
  } else {
   
    document.querySelector(".timer-container h1").textContent = "The deal has ended!";
    document.querySelector(".timer").style.display = "none";
  }
}


setInterval(updateCountdown, 1000);


// end timer





// start  slide card

const sliderWrapper = document.querySelector('.slider-wrapper');
const cards = document.querySelectorAll('.card');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');

let currentIndex = 0;
const visibleCards = 3; 
const cardWidth = cards[0].offsetWidth + 15; 
const totalCards = cards.length;


function updateSlider() {
  const offset = -currentIndex * cardWidth; 
  sliderWrapper.style.transform = `translateX(${offset}px)`;
}


nextButton.addEventListener('click', () => {
  if (currentIndex < totalCards - visibleCards) {
    currentIndex++;
    updateSlider();
  }
});


prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});


updateSlider();
// end  slide card
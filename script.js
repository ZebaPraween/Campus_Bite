const slider = document.querySelector('.slider');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let scrollAmount = 0;
const cardWidth = slider.children[0].offsetWidth + 20; // card width + gap

// Next button
nextBtn.addEventListener('click', () => {
  if (scrollAmount < slider.scrollWidth - slider.clientWidth) {
    scrollAmount += cardWidth;
    slider.style.transform = `translateX(-${scrollAmount}px)`;
  } else {
    scrollAmount = 0; // loop back
    slider.style.transform = `translateX(0px)`;
  }
});

// Prev button
prevBtn.addEventListener('click', () => {
  if (scrollAmount > 0) {
    scrollAmount -= cardWidth;
    slider.style.transform = `translateX(-${scrollAmount}px)`;
  } else {
    scrollAmount = slider.scrollWidth - slider.clientWidth; // loop to end
    slider.style.transform = `translateX(-${scrollAmount}px)`;
  }
});

const slider = document.querySelector('.services-slider');

let isDragging = false;
let startX;
let scrollLeft;

// Clone cards for infinite scroll
const cards = slider.children;
for(let i = 0; i < cards.length; i++) {
  slider.appendChild(cards[i].cloneNode(true));
}

let scrollSpeed = 1; // auto scroll speed
function autoScroll() {
  slider.scrollLeft += scrollSpeed;
  if (slider.scrollLeft >= slider.scrollWidth / 2) {
    slider.scrollLeft = 0;
  }
  requestAnimationFrame(autoScroll);
}
autoScroll();

// Drag to scroll
slider.addEventListener('mousedown', e => {
  isDragging = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => isDragging = false);
slider.addEventListener('mouseup', () => isDragging = false);
slider.addEventListener('mousemove', e => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});

// Touch events for mobile
slider.addEventListener('touchstart', e => {
  startX = e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('touchmove', e => {
  const x = e.touches[0].pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});

/* -------------------------
   Ripple effect
   ------------------------- */
document.addEventListener('click', (e) => {
  const el = e.target.closest('.ripple');
  if(!el) return;
  const rect = el.getBoundingClientRect();
  const span = document.createElement('span');
  const d = Math.max(rect.width, rect.height);
  span.style.width = span.style.height = d + 'px';
  span.style.left = (e.clientX - rect.left - d/2) + 'px';
  span.style.top = (e.clientY - rect.top - d/2) + 'px';
  el.appendChild(span);
  setTimeout(()=> span.remove(), 700);
});

/* -------------------------
   Tabs
   ------------------------- */
const tabSign = document.getElementById('tabSign');
const tabReg  = document.getElementById('tabReg');
const formsEl = document.getElementById('forms');

function switchTo(which) {
  if(which === 'sign') {
    formsEl.style.transform = 'translateX(0%)';
    tabSign.classList.add('active'); tabReg.classList.remove('active');
  } else {
    formsEl.style.transform = 'translateX(-50%)';
    tabReg.classList.add('active'); tabSign.classList.remove('active');
  }
}
tabSign.addEventListener('click', () => switchTo('sign'));
tabReg.addEventListener('click', () => switchTo('reg'));

/* -------------------------
   Show/Hide passwords
   ------------------------- */
document.getElementById('toggleSignEye').addEventListener('click', () => {
  const p = document.getElementById('signinPass');
  p.type = p.type === 'password' ? 'text' : 'password';
});
document.getElementById('toggleRegEye').addEventListener('click', () => {
  const p = document.getElementById('regPass');
  p.type = p.type === 'password' ? 'text' : 'password';
});

/* -------------------------
   Remember Me
   ------------------------- */
const remember = document.getElementById('remember');
const signinID = document.getElementById('loginID');
try {
  const saved = localStorage.getItem('campusbite_remember_id');
  if(saved) { signinID.value = saved; remember.checked = true; }
} catch(e){}

/* -------------------------
   Simulated Sign In / Register
   ------------------------- */
function showLoader(btn, text) {
  btn.disabled = true;
  const old = btn.innerHTML;
  btn.innerHTML = `<span class="loader"></span> ${text}`;
  return () => { btn.innerHTML = old; btn.disabled = false; }
}

const signInBtn = document.getElementById('signInBtn');
signInBtn.addEventListener('click', () => {
  const id = signinID.value.trim();
  const pw = document.getElementById('signinPass').value;

  if(!id || !pw) return;

  try {
    if(remember.checked) localStorage.setItem('campusbite_remember_id', id);
    else localStorage.removeItem('campusbite_remember_id');
  } catch(e){}

  const restore = showLoader(signInBtn, "Signing In...");
  setTimeout(() => restore(), 1200);
});

const createAccBtn = document.getElementById('createAccBtn');
createAccBtn.addEventListener('click', () => {
  const name = document.getElementById('regName').value.trim();
  const id = document.getElementById('regID').value.trim();
  const pw = document.getElementById('regPass').value;

  if(!name || !id || pw.length < 6) return;

  const restore = showLoader(createAccBtn, "Creating...");
  setTimeout(() => {
    restore();
    switchTo('sign');
    signinID.value = id;
  }, 1500);
});

/* -------------------------
   Carousel
   ------------------------- */
const images = [
  { src: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900', title:'Order Your Favorites', desc:'Fresh food delivered on campus — fast.' },
  { src: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80', title:'Snacks & Coffee', desc:'Perfect study break combos.' },
  { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80', title:'Combo Offers', desc:'Save with weekly combos.' }
];

let cIndex = 0, cTimer = null;
const heroImg = document.getElementById('heroImg');
const heroTitle = document.getElementById('heroTitle');
const heroDesc = document.getElementById('heroDesc');
const dotsWrap = document.getElementById('dots');

function buildDots(){
  dotsWrap.innerHTML = '';
  images.forEach((_,i) => {
    const d = document.createElement('button');
    d.className = 'dot';
    d.addEventListener('click', ()=> { showSlide(i); restart(); });
    dotsWrap.appendChild(d);
  });
}
function showSlide(i){
  cIndex = (i + images.length) % images.length;
  heroImg.src = images[cIndex].src;
  heroTitle.textContent = images[cIndex].title;
  heroDesc.textContent = images[cIndex].desc;
  [...dotsWrap.children].forEach((b,j)=>b.classList.toggle('active', j===cIndex));
}
function next(){ showSlide(cIndex+1); }
function prev(){ showSlide(cIndex-1); }
function start(){ cTimer = setInterval(()=>next(),3500); }
function stop(){ clearInterval(cTimer); cTimer=null; }
function restart(){ stop(); start(); }

buildDots();
showSlide(0);
start();
document.getElementById('next').onclick = ()=>{ next(); restart(); };
document.getElementById('prev').onclick = ()=>{ prev(); restart(); };
function showSlide(i){
  cIndex = (i + images.length) % images.length;
  heroImg.src = images[cIndex].src;
  heroTitle.textContent = images[cIndex].title;
  heroDesc.textContent = images[cIndex].desc;

  // ✨ Restart fade animation on slide change
  [heroImg, heroTitle, heroDesc].forEach(el => {
    el.classList.add('fade-reset');
    void el.offsetWidth; // force reflow
    el.classList.remove('fade-reset');
  });

  [...dotsWrap.children].forEach((b,j)=>b.classList.toggle('active', j===cIndex));
}

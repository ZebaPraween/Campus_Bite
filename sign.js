const loginBtn = document.querySelector('.login');
const signupBtn = document.querySelector('.signup');
const slider = document.querySelector('.slider');
const formSection = document.querySelector('.form-section');

signupBtn.onclick = () => {
  slider.classList.add('moveslider');
  formSection.classList.add('form-section-move');
};
loginBtn.onclick = () => {
  slider.classList.remove('moveslider');
  formSection.classList.remove('form-section-move');
};

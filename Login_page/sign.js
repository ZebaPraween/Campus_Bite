// === SLIDER BUTTONS ===
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

// === FORM VALIDATION ===
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const id = this.querySelector(".studentid").value.trim();
    const pass = this.querySelector(".password").value.trim();

    if(id === "" || pass === "") {
        alert("Please fill all fields before signing in.");
        return;
    }

    window.location.href = "../index.html";
});

document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const pass = document.getElementById("regPass").value.trim();
    const confirm = document.getElementById("regConfirmPass").value.trim();

    if(pass !== confirm) {
        alert("Passwords do not match!");
        return;
    }

    alert("Registration Successful!");
    window.location.href = "../index.html";
});

// ========== Mobile Navbar Toggle ==========
let toggler = document.querySelector("#toggler");
let navbar = document.querySelector(".navbar");

toggler.addEventListener("change", () => {
  if (toggler.checked) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
});

// ========== Smooth Scroll for Nav Links ==========
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });

    // close menu on mobile after click
    toggler.checked = false;
    navbar.classList.remove("active");
  });
});

// ========== MENU FILTER SYSTEM ==========
const filterButtons = document.querySelectorAll(".controls .buttons");
const menuItems = document.querySelectorAll(".image");

filterButtons.forEach(button => {
  button.addEventListener("click", function () {

    // Remove active class from previous selected button
    filterButtons.forEach(btn => btn.classList.remove("active"));
    this.classList.add("active");

    let filter = this.getAttribute("data-filter").toLowerCase().trim();

    menuItems.forEach(item => {
      if (filter === "all" || item.classList.contains(filter)) {
        item.parentElement.style.display = "block";
      } else {
        item.parentElement.style.display = "none";
      }
    });
  });
});


// Search Filter
const searchInput = document.getElementById("searchInput");
const menuItems = document.querySelectorAll(".menu-container .box");

searchInput.addEventListener("keyup", () => {
    let filter = searchInput.value.toLowerCase();

    menuItems.forEach(item => {
        let itemText = item.querySelector("h3").innerText.toLowerCase();
        item.style.display = itemText.includes(filter) ? "block" : "none";
    });
});

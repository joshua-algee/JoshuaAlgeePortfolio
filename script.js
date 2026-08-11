// ========================================
// MOBILE NAVIGATION
// ========================================

const menuButton = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");

if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });
}


// ========================================
// AUTOMATIC COPYRIGHT YEAR
// ========================================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// ========================================
// ACTIVE NAVIGATION LINK
// ========================================

const currentPage = document.body.dataset.page;

if (currentPage) {
    const activeLink = document.querySelector(
        `[data-nav="${currentPage}"]`
    );

    if (activeLink) {
        activeLink.classList.add("active");
    }
}
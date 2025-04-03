function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    const hamburger = document.querySelector(".hamburger i");
    navLinks.classList.toggle("show");
    
    if (navLinks.classList.contains("show")) {
        hamburger.classList.remove("fa-bars");
        hamburger.classList.add("fa-times");
    } else {
        hamburger.classList.remove("fa-times");
        hamburger.classList.add("fa-bars");
    }
}
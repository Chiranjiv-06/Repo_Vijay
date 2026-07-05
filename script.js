// ===============================
// Portfolio JavaScript
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // ===============================
    // Typing Effect
    // ===============================

    const text = [
        "Python Developer",
        "Data Analyst Enthusiast",
        "Backend Developer",
        "Open Source Learner",
        "Problem Solver"
    ];

    let index = 0;
    let charIndex = 0;
    let currentText = "";
    let isDeleting = false;

    const typing = document.getElementById("typing");

    function typeEffect() {

        if (!typing) return;

        currentText = text[index];

        if (!isDeleting) {
            typing.textContent = currentText.substring(0, charIndex++);
        } else {
            typing.textContent = currentText.substring(0, charIndex--);
        }

        let speed = isDeleting ? 50 : 120;

        if (!isDeleting && charIndex === currentText.length + 1) {
            isDeleting = true;
            speed = 1500;
        }

        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % text.length;
        }

        setTimeout(typeEffect, speed);
    }

    typeEffect();

    // ===============================
    // Mobile Menu
    // ===============================

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn) {
        menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

    // ===============================
    // Reveal Animation
    // ===============================

    const hiddenElements = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    }, {
        threshold: 0.15
    });

    hiddenElements.forEach(section => {
        section.classList.add("hidden");
        observer.observe(section);
    });

    // ===============================
    // Active Navigation
    // ===============================

    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            if (scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }

        });

        navItems.forEach(link => {

            link.classList.remove("active-link");

            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active-link");
            }

        });

    });

    // ===============================
    // Navbar Background
    // ===============================

    window.addEventListener("scroll", () => {

        const header = document.querySelector("header");

        if (window.scrollY > 80) {

            header.style.background = "rgba(15,23,42,.9)";

        } else {

            header.style.background = "rgba(15,23,42,.55)";

        }

    });

});
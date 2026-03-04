document.addEventListener('DOMContentLoaded', () => {

    // Mobile Menu Toggle
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-links");

    hamburger.addEventListener("click", mobileMenu);

    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

    // Close menu when clicking a link
    const navLink = document.querySelectorAll(".nav-links a");
    navLink.forEach(n => n.addEventListener("click", closeMenu));

    function closeMenu() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }

    // Navbar Scroll Effect
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Reveal Elements on Scroll - Updated for smoother animations
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 100; // Lowered threshold for earlier reveal

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            }
        }
    }

    window.addEventListener("scroll", reveal);
    // Trigger once on load
    reveal();

    // Active Navigation Link on Scroll
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });

    // Floral Parallax Scroll Effect
    const floralLeft = document.getElementById("floralLeft");
    const floralRight = document.getElementById("floralRight");

    window.addEventListener("scroll", () => {
        const scrolled = window.scrollY;

        // Subtle parallax on the floral side decorations
        if (floralLeft) {
            // Moves slightly slower than scroll
            floralLeft.style.transform = `translate3d(0, calc(-50% + ${scrolled * 0.15}px), 0)`;
        }
        if (floralRight) {
            // Moves slightly upward against scroll
            floralRight.style.transform = `translate3d(0, calc(-50% + ${scrolled * -0.1}px), 0)`;
        }
    });
});

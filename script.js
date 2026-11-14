
/* =================================
   SADMAN - PORTFOLIO JAVASCRIPT
================================= */

// 1. Active Navigation Links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });

});


// 2. Back To Top Button
const topButton = document.createElement("button");

topButton.innerHTML = "↑";
topButton.id = "backToTop";

document.body.appendChild(topButton);

// Button Design
topButton.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    background: #00c8ff;
    color: #080d19;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    display: none;
    z-index: 9999;
    box-shadow: 0 0 20px rgba(0, 200, 255, 0.4);
    transition: 0.3s;
`;

// Show / Hide Button
window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }

});

// Scroll To Top
topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// 3. Welcome Message
console.log("Welcome to Sadman's Portfolio!");


// 4. Current Year
console.log("Portfolio is running successfully!");

// Reveal animation when scrolling

const revealElements = document.querySelectorAll(
    ".project-card, .hero-content, .hero-image"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("revealed");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});

// CONTACT FORM
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const subject = encodeURIComponent("Portfolio Contact");
        const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        );

        window.location.href =
            `mailto:YOUR_EMAIL@example.com?subject=${subject}&body=${body}`;
    });
}

document.querySelectorAll(
    '.project-card, .skill-card, .btn, .social-links a'
).forEach(element => {

    element.addEventListener('click', function () {

        this.classList.remove('tap-animate');

        void this.offsetWidth;

        this.classList.add('tap-animate');

        this.addEventListener('animationend', function () {
            this.classList.remove('tap-animate');
        }, { once: true });

    });

});

/* MOBILE PREMIUM TAP ANIMATION */


/* SADMAN - PREMIUM TOUCH ANIMATION */

document.addEventListener("pointerdown", (event) => {

    const target = event.target.closest(
        ".project-card, .skill-card, .btn, .social-links a, button"
    );

    if (!target) return;

    target.animate(
        [
            {
                transform: "scale(1)",
                filter: "brightness(1)",
                boxShadow: "0 0 0 rgba(0,200,255,0)"
            },
            {
                transform: "scale(0.95)",
                filter: "brightness(1.4)",
                boxShadow: "0 0 25px #00c8ff"
            },
            {
                transform: "scale(1.03)",
                filter: "brightness(1.2)",
                boxShadow: "0 0 35px #00c8ff"
            },
            {
                transform: "scale(1)",
                filter: "brightness(1)",
                boxShadow: "0 0 0 rgba(0,200,255,0)"
            }
        ],
        {
            duration: 650,
            easing: "ease-out"
        }
    );

});


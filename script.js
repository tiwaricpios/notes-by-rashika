// ======================================
// NOTES BY RASHIKA
// script.js
// ======================================

// DARK MODE

const themeToggle = document.getElementById("themeToggle");

const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);

    if (themeToggle) {
        themeToggle.textContent =
            currentTheme === "dark" ? "☀️" : "🌙";
    }
}

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        let theme =
            document.documentElement.getAttribute("data-theme");

        if (theme === "dark") {

            document.documentElement.setAttribute(
                "data-theme",
                "light"
            );

            localStorage.setItem("theme", "light");

            themeToggle.textContent = "🌙";

        } else {

            document.documentElement.setAttribute(
                "data-theme",
                "dark"
            );

            localStorage.setItem("theme", "dark");

            themeToggle.textContent = "☀️";
        }

    });

}

// MOBILE MENU

const mobileMenuBtn =
    document.getElementById("mobileMenuBtn");

const mobileMenu =
    document.getElementById("mobileMenu");

if (mobileMenuBtn && mobileMenu) {

    mobileMenuBtn.addEventListener("click", () => {

        if (
            mobileMenu.style.display === "flex"
        ) {

            mobileMenu.style.display = "none";

        } else {

            mobileMenu.style.display = "flex";
        }

    });

}

// CLOSE MOBILE MENU AFTER CLICK

const mobileLinks =
    document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (mobileMenu) {

            mobileMenu.style.display = "none";
        }

    });

});

// FAQ ACCORDION

const faqQuestions =
    document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const answer =
            question.nextElementSibling;

        const isOpen =
            answer.style.display === "block";

        document
            .querySelectorAll(".faq-answer")
            .forEach(item => {

                item.style.display = "none";
            });

        if (!isOpen) {

            answer.style.display = "block";
        }

    });

});

// ACTIVE NAVBAR LINK

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(
        ".nav-links a"
    );

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {
            link.classList.add("active");
        }

    });

});

// SCROLL REVEAL ANIMATION

const revealElements =
    document.querySelectorAll(
        ".product-card, .bundle-card, .feature-card, .testimonial-card, .contact-card"
    );

const revealOnScroll = () => {

    revealElements.forEach(el => {

        const windowHeight =
            window.innerHeight;

        const elementTop =
            el.getBoundingClientRect().top;

        const revealPoint = 100;

        if (
            elementTop <
            windowHeight - revealPoint
        ) {

            el.style.opacity = "1";
            el.style.transform =
                "translateY(0)";

        }

    });

};

revealElements.forEach(el => {

    el.style.opacity = "0";

    el.style.transform =
        "translateY(40px)";

    el.style.transition =
        "all 0.6s ease";
});

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();

// SMOOTH SCROLL FOR ALL LINKS

document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener(
            "click",
            function (e) {

                e.preventDefault();

                const target =
                    document.querySelector(
                        this.getAttribute("href")
                    );

                if (target) {

                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    });

// SAMPLE BUTTONS

const sampleButtons =
    document.querySelectorAll(".sample-btn");

sampleButtons.forEach(button => {

    button.addEventListener("click", () => {

        alert(
            "Sample PDF will be available soon."
        );

    });

});

// HEADER SHADOW ON SCROLL

window.addEventListener("scroll", () => {

    const header =
        document.querySelector(".header");

    if (!header) return;

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.08)";

    } else {

        header.style.boxShadow = "none";
    }

});

console.log(
    "Notes By Rashika Website Loaded Successfully 🚀"
);
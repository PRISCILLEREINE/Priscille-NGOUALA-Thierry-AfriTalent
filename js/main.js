/* =========================
   DARK MODE + LOCALSTORAGE
========================= */

const darkModeBtn = document.getElementById("darkModeBtn");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

if (darkModeBtn) {
  darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
}


/* =========================
   RETOUR EN HAUT
========================= */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

  if (!backToTop) return;

  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }

});

if (backToTop) {

  backToTop.addEventListener("click", () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

}
 window.addEventListener("scroll", function () {

    const navbar = document.getElementById("mainNavbar");

    if (window.scrollY > 50) {
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }

});
/* =========================
   COMPTEURS AU SCROLL
========================= */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;
            const target = +counter.dataset.target;

            let count = 0;

            const updateCounter = () => {

                const increment = target / 100;

                if (count < target) {

                    count += increment;

                    counter.innerText = Math.floor(count);

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText = target;

                }
            };

            updateCounter();

            counterObserver.unobserve(counter);
        }
    });

}, {
    threshold: 0.5
});

counters.forEach(counter => {
    counterObserver.observe(counter);
});
// Animation Fade-In

const fadeElements = document.querySelectorAll(".fade-in");

const fadeObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

fadeElements.forEach(element => {
    fadeObserver.observe(element);
});
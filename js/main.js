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
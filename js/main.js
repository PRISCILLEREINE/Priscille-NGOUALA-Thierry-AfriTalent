console.log("JS chargé");
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
      behavior: "smooth",
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

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
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
  },
  {
    threshold: 0.5,
  },
);

counters.forEach((counter) => {
  counterObserver.observe(counter);
});

// Validation formulaire contact

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let valid = true;

    // Champs
    const nom = document.getElementById("nom");
    const prenom = document.getElementById("prenom");
    const email = document.getElementById("email");
    const sujet = document.getElementById("sujet");
    const message = document.getElementById("message");

    // Zones erreurs
    document.getElementById("errorNom").textContent = "";
    document.getElementById("errorPrenom").textContent = "";
    document.getElementById("errorEmail").textContent = "";
    document.getElementById("errorSujet").textContent = "";
    document.getElementById("errorMessage").textContent = "";
    document.getElementById("successMsg").textContent = "";

    // Vérification nom
    if (nom.value.trim() === "") {
      document.getElementById("errorNom").textContent =
        "Le nom est obligatoire";
      valid = false;
    }

    // Vérification prénom
    if (prenom.value.trim() === "") {
      document.getElementById("errorPrenom").textContent =
        "Le prénom est obligatoire";
      valid = false;
    }

    // Vérification email avec regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.value)) {
      document.getElementById("errorEmail").textContent =
        "Adresse email invalide";
      valid = false;
    }

    // Vérification sujet
    if (sujet.value === "") {
      document.getElementById("errorSujet").textContent =
        "Veuillez choisir un sujet";
      valid = false;
    }

    // Vérification message minimum 20 caractères
    if (message.value.trim().length < 20) {
      document.getElementById("errorMessage").textContent =
        "Le message doit contenir au moins 20 caractères";
      valid = false;
    }

    // Succès
    if (valid) {
      document.getElementById("successMsg").textContent =
        "✅ Votre message a été envoyé avec succès !";

      contactForm.reset();
    }
  });
}
/* =========================
   FADE IN AU SCROLL
========================= */

const fadeElements = document.querySelectorAll(".fade-in");

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

fadeElements.forEach((element) => {
  fadeObserver.observe(element);
});
const filter = document.getElementById("filter");
const freelancers = document.querySelectorAll(".freelance");

if (filter) {
  filter.addEventListener("change", function () {
    const category = this.value;

    freelancers.forEach((card) => {
      if (category === "all" || card.classList.contains(category)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
}

const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu a");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  document.body.classList.toggle("menu-open");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    menu.classList.remove("active");
    document.body.classList.remove("menu-open");
  });
});

/* PROCESS SLIDER */

const processGrid = document.querySelector(".process-grid");
const processPrev = document.querySelector(".process-prev");
const processNext = document.querySelector(".process-next");

if (processGrid && processPrev && processNext) {
  const scrollAmount = () => {
    const card = processGrid.querySelector(".process-card");
    return card ? card.offsetWidth + 18 : 300;
  };

  processNext.addEventListener("click", () => {
    processGrid.scrollBy({
      left: scrollAmount(),
      behavior: "smooth",
    });
  });

  processPrev.addEventListener("click", () => {
    processGrid.scrollBy({
      left: -scrollAmount(),
      behavior: "smooth",
    });
  });
}
/* CERTIFICATES COVERFLOW */

const certCards = document.querySelectorAll(".cert-card");
const certPrev = document.querySelector(".cert-prev");
const certNext = document.querySelector(".cert-next");

let certIndex = 2;

function updateCertificates() {
  certCards.forEach((card) => {
    card.className = "cert-card";
  });

  const total = certCards.length;

  certCards[certIndex].classList.add("active");

  certCards[(certIndex - 1 + total) % total].classList.add("left-1");

  certCards[(certIndex - 2 + total) % total].classList.add("left-2");

  certCards[(certIndex + 1) % total].classList.add("right-1");

  certCards[(certIndex + 2) % total].classList.add("right-2");

  certCards.forEach((card) => {
    if (
      !card.classList.contains("active") &&
      !card.classList.contains("left-1") &&
      !card.classList.contains("left-2") &&
      !card.classList.contains("right-1") &&
      !card.classList.contains("right-2")
    ) {
      card.classList.add("hidden");
    }
  });
}

certNext.addEventListener("click", () => {
  certIndex = (certIndex + 1) % certCards.length;
  updateCertificates();
});

certPrev.addEventListener("click", () => {
  certIndex = (certIndex - 1 + certCards.length) % certCards.length;
  updateCertificates();
});

certCards.forEach((card, index) => {
  card.addEventListener("click", () => {
    certIndex = index;
    updateCertificates();
  });
});

updateCertificates();

/* FAQ ACCORDION */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    faqItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
      }
    });

    item.classList.toggle("active");
  });
});

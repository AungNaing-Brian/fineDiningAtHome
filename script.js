ScrollReveal().reveal('.hero__content', { delay: 200 });
ScrollReveal().reveal('.card', { interval: 200 });
ScrollReveal().reveal('.menu-item', { interval: 100 });
ScrollReveal().reveal('.video-card', { interval: 200 });
ScrollReveal().reveal('.main-card', { interval: 200 });
ScrollReveal().reveal('.dessert', { delay: 200 });

document.addEventListener("DOMContentLoaded", () => {
  const videoCards = document.querySelectorAll(".video-card");

  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  videoCards.forEach((card) => {
    const video = card.querySelector("video");

    if (isMobile) {
      // 📱 MOBILE → autoplay
      video.play().catch(() => {});
    } else {
      // 💻 DESKTOP → no autoplay, only hover
      video.pause();
      video.currentTime = 0;

      card.addEventListener("mouseenter", () => {
        video.play().catch(() => {});
      });

      card.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0;
      });
    }
  });
});

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav__link");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 120;
    const sectionId = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active");

        const activeLink = document.querySelector(
          `.nav__link[href*="${sectionId}"]`
        );

        if (activeLink) activeLink.classList.add("active");
      });
    }
  });
}

window.addEventListener("scroll", scrollActive);

/* ========== MAIL FUNCTION ========== */

function sendMail(event) {
  event.preventDefault(); 

  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    guests: document.getElementById("guests").value,
    date: document.getElementById("date").value,
    message: document.getElementById("message").value,
    title: "New Booking Request",

  };

  emailjs.send("service_mmpowlf", "template_qa2p4vj", parms).then(() => {
    Swal.fire({
      title: "Message Sent!",
      text: "Thank you for contacting me 😊",
      icon: "success",
    });

    document.getElementById("contact-form").reset();
  });
}

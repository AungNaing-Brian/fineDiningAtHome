ScrollReveal().reveal('.hero-content', { delay: 200 });
ScrollReveal().reveal('.card', { interval: 200 });
ScrollReveal().reveal('.menu-item', { interval: 100 });
ScrollReveal().reveal('.video', { interval: 200 });

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
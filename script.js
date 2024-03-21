document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");

    let cardWidth = carousel.querySelector(".card").offsetWidth;

    const updateCardWidth = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1023) {
        cardWidth = (carousel.offsetWidth / 3) - 20;
      } else {
        cardWidth = carousel.offsetWidth;
      }
    };

    updateCardWidth();

    window.addEventListener("resize", updateCardWidth);

    nextButton.addEventListener("click", function() {
      carousel.style.transition = "transform 0.5s ease-in-out";
      carousel.style.transform = `translateX(-${cardWidth}px)`;
      setTimeout(() => {
        carousel.appendChild(carousel.firstElementChild.cloneNode(true));
        carousel.style.transition = "none";
        carousel.style.transform = "translateX(0)";
        setTimeout(() => {
          carousel.removeChild(carousel.firstElementChild);
        }, 50);
      }, 500);
    });

    prevButton.addEventListener("click", function() {
      carousel.style.transition = "none";
      carousel.style.transform = `translateX(-${cardWidth}px)`;
      carousel.insertBefore(carousel.lastElementChild.cloneNode(true), carousel.firstElementChild);
      setTimeout(() => {
        carousel.style.transition = "transform 0.5s ease-in-out";
        carousel.style.transform = "translateX(0)";
        setTimeout(() => {
          carousel.removeChild(carousel.lastElementChild);
        }, 500);
      }, 50);
    });
  });
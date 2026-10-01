document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".comparison-carousel");

  if (!carousel) {
    return;
  }

  const items = Array.from(carousel.querySelectorAll("[data-carousel-item]"));
  const previousButton = carousel.querySelector("[data-carousel-prev]");
  const nextButton = carousel.querySelector("[data-carousel-next]");
  const currentLabel = carousel.querySelector("[data-carousel-current]");
  let currentIndex = 0;

  const showItem = (index) => {
    currentIndex = (index + items.length) % items.length;

    items.forEach((item, itemIndex) => {
      const isActive = itemIndex === currentIndex;
      item.hidden = !isActive;
      item.classList.toggle("is-active", isActive);

      if (!isActive) {
        item.pause();
      }
    });

    currentLabel.textContent = String(currentIndex + 1);
  };

  previousButton.addEventListener("click", () => showItem(currentIndex - 1));
  nextButton.addEventListener("click", () => showItem(currentIndex + 1));
});

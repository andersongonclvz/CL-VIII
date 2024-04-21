const filter = document.getElementById("selection");
const cards = document.querySelectorAll(".medicine-item");

filter.addEventListener("change", () => {
  const selectedCategory = filter.value;
  cards.forEach((card) => {
    if (
      card.dataset.category === selectedCategory ||
      selectedCategory === "all"
    ) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

(function() {
  const sort = document.querySelector(".catalog__button-sort");
  const container = document.querySelector(".catalog__items");
  const items = Array.from(container.querySelectorAll(".catalog__item"));

  sort.addEventListener("change", () => {
    if (sort.selectedIndex == 0 || sort.selectedIndex == 2) {
      sortUp();
    } else if (sort.selectedIndex == 1 || sort.selectedIndex == 3) {
      sortDown();
    }
  });

  // функция сортировки по убыванию
  function sortDown() {
    // сортируем
    items.sort((a, b) => {
      const priceA = parseInt(
        a.querySelector(".catalog__price").textContent,
        10
      );
      const priceB = parseInt(
        b.querySelector(".catalog__price").textContent,
        10
      );
      return priceB - priceA;
    });
    // вставляем в нужном порядке
    items.forEach(item => container.appendChild(item));
  }

  // функция сортировки по возрастанию
  function sortUp() {
    // сортируем
    items.sort((a, b) => {
      const priceA = parseInt(
        a.querySelector(".catalog__price").textContent,
        10
      );
      const priceB = parseInt(
        b.querySelector(".catalog__price").textContent,
        10
      );
      return priceA - priceB;
    });
    // вставляем в нужном порядке
    items.forEach(item => container.appendChild(item));
  }
})();

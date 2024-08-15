const sidebarItems = document.querySelectorAll(".sidebar__item");

sidebarItems.forEach((item) => {
  item.addEventListener("click", function () {
    // Удаляем активный класс у всех элементов
    sidebarItems.forEach((i) => i.classList.remove("sidebar__item--active"));
    // Добавляем активный класс к выбранному элементу
    this.classList.add("sidebar__item--active");
  });
});

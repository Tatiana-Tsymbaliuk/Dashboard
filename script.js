document.addEventListener("DOMContentLoaded", () => {
  const filterBtn = document.querySelector(".customers__header-active");
  const rows = document.querySelectorAll(".customers__table-row");

  if (filterBtn) {
    filterBtn.addEventListener("click", () => {
      rows.forEach((row) => {
        const statusCell = row.querySelector(
          ".customers__table-row td:last-child"
        );
        if (statusCell && statusCell.textContent.trim() !== "Active") {
          row.style.display = "none";
        } else {
          row.style.display = "";
        }
      });
    });
  } else {
    console.error("Элемент с классом 'customers__header-active' не найден.");
  }
});

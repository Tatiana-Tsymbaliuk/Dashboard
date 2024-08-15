document.addEventListener("DOMContentLoaded", () => {
  const filterBtn = document.querySelector(".customers__btn");
  const rows = document.querySelectorAll(".table__row");

  filterBtn.addEventListener("click", () => {
    rows.forEach((row) => {
      const statusCell = row.querySelector(".table__cell--status");
      if (statusCell && statusCell.textContent !== "Active") {
        row.style.display = "none";
      } else {
        row.style.display = "";
      }
    });
  });
});

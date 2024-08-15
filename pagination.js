document.addEventListener("DOMContentLoaded", function () {
  const pages = document.querySelectorAll(".pagination__page");
  const prevButton = document.querySelector(".pagination__control--prev");
  const nextButton = document.querySelector(".pagination__control--next");

  let currentPage = 1;

  function updatePagination(page) {
    // Remove active class from all pages
    pages.forEach((pageItem) =>
      pageItem.classList.remove("pagination__page--active")
    );

    // Add active class to the current page
    pages[page - 1].classList.add("pagination__page--active");
  }

  pages.forEach((pageItem, index) => {
    pageItem.addEventListener("click", () => {
      currentPage = index + 1;
      updatePagination(currentPage);
    });
  });

  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      updatePagination(currentPage);
    }
  });

  nextButton.addEventListener("click", () => {
    if (currentPage < pages.length) {
      currentPage++;
      updatePagination(currentPage);
    }
  });
});

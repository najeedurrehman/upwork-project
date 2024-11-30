const toolbar = document.querySelector(".toolbar");
const searchbar = document.querySelector(".search-bar");

const table = document.querySelector(".table");

const tableHeader = document.querySelector(".table__header");
const tableHeaderFixed = document.querySelector(".table__header-fixed");

const tableBody = document.querySelector(".table__body");

const contentContainer = document.querySelector(".content-container");
document.addEventListener("scroll", (event) => {
  const scroll = this.scrollY;

  if (scroll > 70) {
    toolbar.classList.remove("animate__fadeInRight");
    toolbar.classList.add("animate__fadeOutRight");

    searchbar.classList.remove("animate__fadeInLeft");
    searchbar.classList.add("animate__fadeOutLeft");

    /* TABLE CHANGES */
    table.classList.add("w-full");
    tableHeader.classList.add("d-none");

    
    tableHeaderFixed.classList.add("d-flex");

    tableBody.classList.add("table__body-customize");
    /* */
    setTimeout(() => {
      toolbar.classList.remove("d-flex");
      searchbar.classList.remove("d-flex");
    }, 100);
  } else {
    toolbar.classList.remove("animate__fadeOutRight");
    toolbar.classList.add("animate__fadeInRight");

    searchbar.classList.remove("animate__fadeOutLeft");
    searchbar.classList.add("animate__fadeInLeft");

    /* TABLE CHANGES */
    table.classList.remove("w-full");
    tableHeader.classList.remove("d-none");
    tableHeaderFixed.classList.remove("d-flex");
    tableBody.classList.remove("table__body-customize");
    /* */

    setTimeout(() => {
      toolbar.classList.add("d-flex");
      searchbar.classList.add("d-flex");
    }, 100);
  }
});

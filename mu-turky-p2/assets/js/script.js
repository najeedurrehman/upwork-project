const toolbar = document.querySelector(".toolbar");
const searchbar = document.querySelector(".search-bar");

const table = document.querySelector(".table");

const tableHeader = document.querySelector(".table__header");
const tableBody = document.querySelector(".table__body");

const contentContainer = document.querySelector(".content-container");
const mainContainer = document.querySelector(".main-content");

const searchInputField = document.querySelector(".search-bar__input-field");
const topContainer = document.querySelector(".content-container");

var scroll = 0;
let debounceTimeout;

mainContainer.addEventListener("scroll", (event) => {
  const newScroll = Math.round(mainContainer.scrollTop);
  console.log(newScroll);
  if (newScroll !== scroll) {
    scroll = Number(newScroll);
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      const searchCharacterLength = searchInputField.value.trim().length;
      adjustStructure(scroll, searchCharacterLength);
    }, 75);
  }
});

function searchFieldChangeHandler() {
  const searchCharacterLength = searchInputField.value.trim().length;
  adjustStructure(scroll, searchCharacterLength);
}

const adjustStructure = (scroll, searchCharacterLength) => {

  if (
    !searchCharacterLength &&
    tableHeader.classList.contains("table__header_no-radius")
  ) {
    tableHeader.classList.remove(
      "table__header_no-radius",
      "table__header--top-60"
    );
    searchbar.classList.remove("bg-white", "search-bar-sticky");
  }


  if (scroll > 5) {
    /* Remove Table Header */
    toolbar.classList.remove("animate__fadeIn");
    toolbar.classList.add("animate__fadeOut");
    /* Container */
    topContainer.classList.add("top-0");

    /* Adjust Table Padding Top */
    table.classList.add("w-full", "table-pt-0");

    if (!searchCharacterLength) {
      /* Hide Searchbar */
      searchbar.classList.remove("animate__fadeIn");
      searchbar.classList.add("animate__fadeOut");
      /* Table Header */
      tableHeader.classList.add("make-header-white", "header-padding-lr");
    } else {
      searchbar.classList.add("bg-white", "search-bar-sticky");
      tableHeader.classList.add(
        "table__header_no-radius",
        "header-padding-lr",
        "table__header--top-60"
      );
    }

    /* Table Body */
    tableBody.classList.add("table__body-customize");
  } else {
    /* Add Table Header */
    toolbar.classList.remove("animate__fadeOut");
    toolbar.classList.add("animate__fadeIn");

    /* Container */
    topContainer.classList.remove("top-0");

    /* Show Searchbar */
    searchbar.classList.remove("animate__fadeOut");
    searchbar.classList.add("animate__fadeIn");

    /* Adjust Table Padding Top */
    table.classList.remove("w-full", "table-pt-0");
    if (!searchCharacterLength) {
      /* Hide Searchbar */
      searchbar.classList.remove("animate__fadeOut");
      searchbar.classList.add("animate__fadeIn");
      /* Table Header */
      tableHeader.classList.remove("make-header-white", "header-padding-lr");
    } else {
      searchbar.classList.remove("bg-white", "search-bar-sticky");
      tableHeader.classList.remove(
        "table__header_no-radius",
        "header-padding-lr",
        "table__header--top-60"
      );
    }

    /* Table Body */
    tableBody.classList.remove("table__body-customize");
  }
};

const toolbar = document.querySelector(".toolbar");
const searchbar = document.querySelector(".search-bar");

const table = document.querySelector(".table");

const tableHeader = document.querySelector(".table__header");
const tableBody = document.querySelector(".table__body");

const contentContainer = document.querySelector(".content-container");
const mainContainer = document.querySelector(".main-content");

const searchInputField = document.querySelector(".search-bar__input-field");

var scroll = 0;
let debounceTimeout;

mainContainer.addEventListener("scroll", (event) => {
  const newScroll = Math.round(mainContainer.scrollTop);

  if (newScroll !== scroll) {
    scroll = newScroll;
    console.log(scroll);
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      console.log(`Called`);
      const searchCharacterLength = searchInputField.value.trim().length;
      adjustStructure(scroll, searchCharacterLength);
    }, 50);
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
  }

  if (scroll >= 5) {
  
    toolbar.classList.remove("animate__fadeIn");
    toolbar.classList.add("animate__fadeOut");

    if (!searchCharacterLength) {
      searchbar.classList.remove("animate__fadeIn");
      searchbar.classList.add("animate__fadeOut");

      tableHeader.classList.add("make-header-white", "plr-header");
    } else {
      searchbar.classList.add("bg-white");
      tableHeader.classList.add(
        "table__header_no-radius",
        "plr-header",
        "table__header--top-60"
      );
    }
    table.classList.add("w-full");
    tableBody.classList.add("table__body-customize");

    setTimeout(() => {
      toolbar.classList.remove("d-flex");

      if (!searchCharacterLength) {
        searchbar.classList.remove("d-flex");
      }
    }, 100);
  } else {
    toolbar.classList.remove("animate__fadeOut");
    toolbar.classList.add("animate__fadeIn");

    if (!searchCharacterLength) {
      searchbar.classList.remove("animate__fadeOut");
      searchbar.classList.add("animate__fadeIn");
      tableHeader.classList.remove("make-header-white", "plr-header");
    } else {
      searchbar.classList.remove("bg-white");
      tableHeader.classList.remove(
        "table__header_no-radius",
        "plr-header",
        "table__header--top-60"
      );
    }
    table.classList.remove("w-full");
    tableBody.classList.remove("table__body-customize");

    setTimeout(() => {
      toolbar.classList.add("d-flex");
      if (!searchCharacterLength) {
        searchbar.classList.add("d-flex");
      }
    }, 100);
  }
};


const scrollme = document.querySelector("#scrollme");

scrollme.addEventListener("change", () => {
  scroll = scrollme.value;
  const searchCharacterLength = searchInputField.value.trim().length;
  adjustStructure(scroll, searchCharacterLength);
});

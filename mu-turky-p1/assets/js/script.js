const header = document.querySelector(".header__nav");
document.addEventListener("scroll", (event) => {
  const scroll = this.scrollY;
  if (scroll > 70) {
    header.classList.add("glossy-header");
  } else {
    header.classList.remove("glossy-header");
  }
});

// dataBody.addEventListener("scroll", (event) => {
//   const scroll = dataBody.scrollTop;
//   if (scroll > 20) {
//     tableContentBlock.classList.add("hide-content-block");
//     statsTable.classList.add("p-0");
//     stattableContainer.classList.add("mt-0");
//     tableHeader.classList.add("w-100");
//     tableHeader.classList.add("header-plr");
//     dataBody.classList.add("pl-30");
//   } else {
//     tableContentBlock.classList.remove("hide-content-block");
//     statsTable.classList.remove("p-0");
//     stattableContainer.classList.remove("mt-0");
//     tableHeader.classList.remove("w-100");
//     tableHeader.classList.remove("header-plr");
//     dataBody.classList.  ("pl-30");
//   }
// });

const tableBody = document.querySelector(".stats-table-body");
const statsTable = document.querySelector(".stats-table");
const tableHeader = document.querySelector(".stats-table-header");
const statTableContainer = document.querySelector(".stat-table-container");
const tableContentBlock = document.querySelector(".table-content-block");
const dataBody = document.querySelector("#data-body");

dataBody.addEventListener("scroll", (event) => {
  const scroll = dataBody.scrollTop;

  if (scroll > 20) {
    statsTable.classList.add("p-0");
    tableContentBlock.classList.add("d-none");
    statTableContainer.classList.add("mt-0");
    tableHeader.classList.add("header-plr");
    tableHeader.classList.add("header-w-full");
    dataBody.classList.add("pl-30");
  } else {
    statsTable.classList.remove("p-0");
    statTableContainer.classList.remove("mt-0");
    tableHeader.classList.remove("header-plr");
    tableHeader.classList.remove("header-w-full");
    dataBody.classList.remove("pl-30");
    tableContentBlock.classList.remove("d-none");
  }
});

// dataBody.addEventListener("scroll", (event) => {
//   const scroll = dataBody.scrollTop;

//   if (scroll > 20) {
//     tableHeader.classList.add("default-width");
//     tableHeader.classList.remove("header-plr");
//     statsTable.classList.remove("active-state-table");
//     dataBody.classList.add("pl-0");
//     tableContentBlock.classList.add("hide-content-block");
//   } else {
//     tableContentBlock.classList.remove("hide-content-block");
//     tableHeader.classList.remove("default-width");
//     tableHeader.classList.add("header-plr");
//     statsTable.classList.add("active-state-table");
//     dataBody.classList.remove("pl-0");
//   }
// });

// const showAll = document.querySelector(".show-all");

// function TriggerAnimation() {
//   alert('Welcome');
// }

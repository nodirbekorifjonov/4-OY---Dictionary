const dropdown = document.querySelector(".dropdown");
const dropdownList = document.querySelector(".dropdown__list");
const dropdownItem = document.querySelectorAll(".dropdown__item");
const dropdownSpan = document.querySelector(".dropdown__span");
const body = document.querySelector("body");

dropdown.addEventListener("click", () => {
  dropdownList.classList.toggle("hidden");
  dropdownList.classList.toggle("flex");
});

dropdownItem.forEach((item) => {
  item.addEventListener("click", (e) => {
    dropdownSpan.textContent = item.textContent;

    if (e.target.className.includes("font-sans")) {
      body.style.fontFamily = "sans-serif";
    } else if (e.target.className.includes("font-serif")) {
      body.style.fontFamily = "serif";
    } else if (e.target.className.includes("font-mono")) {
      body.style.fontFamily = "monospace";
    }

    console.log(e);
  });
});

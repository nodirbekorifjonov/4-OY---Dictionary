const modeOn = document.querySelector(".mode__on");
const modeImgPath = document.querySelector(".mode__img-path");
const modeRectangle = document.querySelector(".mode__rectangle");
const wordPlay = document.querySelector(".word__play");
const wordPlayIco = document.querySelector(".word__play-ico");
const html = document.querySelector("html");

const modeFromLocal = localStorage.getItem("mode")
  ? localStorage.getItem("mode")
  : null;

if (modeFromLocal) {
  html.classList.add("dark");
  modeOn.classList.add("bg-[#A445ED]");
  modeRectangle.classList.remove("mr-auto");
  modeRectangle.classList.add("ml-auto");
  modeImgPath.classList.add("stroke-[#A445ED]");
}

modeOn.addEventListener("click", () => {
  modeOn.classList.toggle("bg-[#A445ED]");
  modeRectangle.classList.toggle("mr-auto");
  modeRectangle.classList.toggle("ml-auto");
  modeImgPath.classList.toggle("stroke-[#A445ED]");

  html.classList.toggle("dark");
  modeFromLocal
    ? localStorage.setItem("mode", "")
    : localStorage.setItem("mode", "dark");
});

// export const wordPlayFunc = () => {
//   wordPlay.addEventListener("mouseover", (e) => {
//     wordPlay.classList.add("bg-[#A445ED]");
//     wordPlayIco.classList.add("fill-[#FFFFFF]");
//   });

//   wordPlay.addEventListener("mouseout", (e) => {
//     wordPlay.classList.remove("bg-[#A445ED]");
//     wordPlayIco.classList.remove("fill-[#FFFFFF]");
//   });
// };

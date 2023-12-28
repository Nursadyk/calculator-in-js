const box = document.querySelectorAll(".box");
const active = document.querySelector(".active");
const clear = document.querySelector(".clear");
box.forEach((el) => {
  el.addEventListener("mouseover", () => {
    el.style.background = ranColor();
    el.style.borderRadius = "10px";
    el.style.margin = "5px";
  });
});
box.forEach((el) => {
  el.addEventListener("mouseleave", () => {
    el.style.background = "";
    el.style.borderRadius = "";
    el.style.margin = "";
  });
});
function ranColor() {
  let str = "#";
  for (let index = 1; index < 7; index++) {
    let change = Math.floor(Math.random() * 10);
    str += change;
  }
  return str;
}
setInterval(() => {
  box.forEach((el) => {
    el.style.background = ranColor();
    el.style.borderRadius = "10px";
    el.style.margin = "5px";
  });
}, 1000);

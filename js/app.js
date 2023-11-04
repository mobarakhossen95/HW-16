


let darkModeBtn = document.querySelector(".darkModeBtn");
let body = document.querySelector("body");


darkModeBtn.addEventListener("click", () => {
  body.classList.toggle('darkmode');
})






let cursor = document.querySelector(".cursor");
let cursorSm = document.querySelector(".cursor-sm");
function customMouseCursor(event) {
  let topValue = event.clientY;
  let leftValue = event.clientX;

  cursor.style.top = `${topValue}px`;
  cursor.style.left = `${leftValue}px`;
  cursorSm.style.top = `${topValue}px`;
  cursorSm.style.left = `${leftValue}px`;
}

window.addEventListener("mousemove", customMouseCursor);
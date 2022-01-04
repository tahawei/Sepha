const btn = document.getElementById("btn");
const resetBtn = document.getElementById("resetBtn");
const counter = document.getElementById("counter");

let clicks = 0;
btn.onclick = () => {
  clicks += 1;

  counter.innerHTML = clicks;
};

resetBtn.onclick = () => {
  clicks = 0;
  counter.innerHTML = clicks;
};

const btnEffect = document.querySelectorAll(".btns");

btnEffect.forEach((btn) => {
  btn.addEventListener("click", function (eo) {
    let x = eo.clientX - eo.target.offsetLeft;
    let y = eo.clientY - eo.target.offsetTop;

    let ripples = document.createElement("span");
    ripples.style.left = x + "px";
    ripples.style.top = y + "px";
    this.appendChild(ripples);
    setTimeout(() => {
      ripples.remove();
    }, 300);
  });
});

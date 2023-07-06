let output = document.querySelector(".answer");
let toss = document.querySelector(".toss");
toss.addEventListener("click", function () {
  let changer = Math.trunc(Math.random() * 2) + 1;
  console.log(changer);
  if (changer === 1) {
    output.textContent = "HEAD";
  } else {
    output.textContent = "TAIL";
  }
  output.style.backgroundColor = "#fcc419";
  toss.classList.add("hidden");
});

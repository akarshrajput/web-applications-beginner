document.querySelector(".bmi-submit").addEventListener("click", function () {
  let fullName = document.querySelector(".bmi-full-name").value;
  let age = Number(document.querySelector(".bmi-age").value);
  let weight = Number(document.querySelector(".bmi-weight").value);
  let height = Number(document.querySelector(".bmi-height").value);
  let heightM = height / 100;
  let bmi = weight / (heightM * heightM);
  const fbmi = parseFloat(bmi).toFixed(2);
  let answer;
  let bg;
  if (bmi < 16) {
    answer = `Severe Thinness`;
    bg = "yellow";
  }
  if (bmi > 16 && bmi < 17) {
    answer = `Moderate Thinness`;
    bg = "yellow";
  }
  if (bmi > 17 && bmi < 18.5) {
    answer = `Mild Thinness`;
    bg = "yellow";
  }
  if (bmi > 18.5 && bmi < 25) {
    answer = `Normal`;
    bg = "green";
  }
  if (bmi > 25 && bmi < 30) {
    answer = `Overweight`;
    bg = "red";
  }
  if (bmi > 30 && bmi < 35) {
    answer = `Obese Class I`;
    bg = "red";
  }
  if (bmi > 35 && bmi < 40) {
    answer = `Obese Class II`;
    bg = "red";
  }
  if (bmi > 40) {
    answer = `Obese Class III`;
    bg = "red";
  }
  document.querySelector(
    ".bmi-result"
  ).textContent = `Hey ${fullName}, Your BMI is ${fbmi} and you are ${answer}`;
  document.querySelector(".bmi-result").style.backgroundColor = bg;
});

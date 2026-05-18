

let count = 0;

// const decreaseBtn = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// const countLabel = document.getElementById("countLabel");

// increaseBtn.onclick = function () {
//   count++;
//   countLabel.textContent = count;
// }
// decreaseBtn.onclick = function () {
//   count--;
//   countLabel.textContent = count;
// }
// resetBtn.onclick = function () {
//   countLabel.textContent = "0";
// }


document.getElementById("increaseBtn").onclick = function () {
  count++;
  document.getElementById("countLabel").textContent = count;
}

document.getElementById("decreaseBtn").onclick = function () {
  count--;
  document.getElementById("countLabel").textContent = count;
}

document.getElementById("resetBtn").onclick = function () {
  count = 0;
  document.getElementById("countLabel").textContent = count;
}
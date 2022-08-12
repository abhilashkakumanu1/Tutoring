const boxEle = document.getElementById("box");
const countEle = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");

const WHITE = "rgb(255, 255, 255)";
const GREENISH = "rgb(162, 230, 162)";
const REDISH = "rgb(241, 151, 151)";

// read value
const countValue = parseInt(countEle.innerText);
console.log(countValue);

// write value
// countEle.innerText = 1;

// Event listener
increaseBtn.addEventListener("click", async (_) => {
  countEle.innerText = parseInt(countEle.innerText) + 1;

  // make green for 0.5 secs
  countEle.style.backgroundColor = GREENISH;

  setTimeout((_) => {
    countEle.style.backgroundColor = WHITE;
  }, 500);
});

decreaseBtn.addEventListener("click", (_) => {
  const countValue = parseInt(countEle.innerText);
  if (countValue > 0) {
    countEle.innerText = countValue - 1;

    //  make red for 0.5 secs
    countEle.style.backgroundColor = REDISH;

    setTimeout((_) => {
      countEle.style.backgroundColor = WHITE;
    }, 500);
  }
});

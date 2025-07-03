// Your code here
//get the element
const dodger = document.getElementById('dodger');

function moveDodgerLeft() {
  // Get the current left position (removing 'px' and converting to number)
  const leftNumbers = dodger.style.left.replace('px', '');
  const left = parseInt(leftNumbers, 10);

  // Only move if we haven't reached the left edge (left > 0)
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

//event listener
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});
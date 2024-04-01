// Your code here

function moveDodgerLeft() {
    const dodger = document.getElementById("dodger");
    const leftPosition = parseInt(dodger.style.left.replace("px", ""), 10);
  
    if (leftPosition > 0) {
      dodger.style.left = `${leftPosition - 1}px`;
    }
}

function moveDodgerRight() {
    const dodger = document.getElementById("dodger");
    const gameWidth = document.getElementById("game").offsetWidth;
    const dodgerWidth = dodger.offsetWidth;
    const currentLeft = parseInt(dodger.style.left.replace("px", ""), 10);
  
    const maxRight = gameWidth - dodgerWidth;
  
    if (currentLeft < maxRight) {
      dodger.style.left = `${currentLeft + 1}px`; // Update left if not at maxRight
    }
  }
  
  

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (event.key === "ArrowRight") {
        moveDodgerRight();
    }
});

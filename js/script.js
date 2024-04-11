let x = 0;
let output = document.getElementById("output");
let meter = document.getElementById("meter");
output.innerHTML = x;
function plus() {
  if (x < 10) {
    output.innerHTML = ++x;
    meter.style.height = x * 10 + "%";
  }
  if (x >= 6) {
    meter.style.background = "red";
    meter.style.filter = "drop-shadow(0 0 5px red)";
  }
}
function minus() {
  if (x > 0) {
    output.innerHTML = --x;
    meter.style.height = x * 10 + "%";
  }
  if (x <= 6) {
    meter.style.background = "#ff0";
    meter.style.filter = "drop-shadow(0 0 5px #ff0)";
  }
}

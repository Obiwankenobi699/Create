// Create clock container
const clock = document.createElement("div");
clock.style.fontSize = "4rem";
clock.style.fontFamily = "monospace";
clock.style.color = "#00ffcc";
clock.style.textAlign = "center";
clock.style.marginTop = "20vh";

// Set background
document.body.style.backgroundColor = "#121212";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";
document.body.style.margin = "0";

// Add to body
document.body.appendChild(clock);

// Clock logic
function updateClock() {
  const now = new Date();
  const hrs = String(now.getHours()).padStart(2, "0");
  const mins = String(now.getMinutes()).padStart(2, "0");
  const secs = String(now.getSeconds()).padStart(2, "0");

  clock.textContent = `${hrs}:${mins}:${secs}`;
}

// Start ticking
updateClock();
setInterval(updateClock, 1000);

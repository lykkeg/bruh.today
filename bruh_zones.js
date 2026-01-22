console.log("NEW 40 ZONE SCRIPT LOADED");

// Grid setup
const rows = 5;
const cols = 8;
const cellWidth = 100 / cols;
const cellHeight = 100 / rows;

// Grab elements
const bruhText = document.getElementById("bruh-text");
const bruhImage = document.getElementById("bruh-image");

// Make text follow mouse
document.addEventListener("mousemove", (e) => {
  bruhText.style.left = e.clientX + "px";
  bruhText.style.top = e.clientY + "px";
});

// Create all zones
for (let r = 0; r < rows; r++) {
  for (let c = 0; c < cols; c++) {
    const index = r * cols + c + 1;

    const div = document.createElement("div");
    div.className = "zone";
    div.dataset.index = index.toString(); // store index as string

    div.style.top = `${r * cellHeight}%`;
    div.style.left = `${c * cellWidth}%`;
    div.style.width = `${cellWidth}%`;
    div.style.height = `${cellHeight}%`;
    div.style.position = "absolute"; // ensures proper placement

    document.body.appendChild(div);
  }
}

// Single click listener (event delegation)
document.addEventListener("click", (e) => {
  const zone = e.target.closest(".zone");
  if (!zone) return;

  const index = Number(zone.dataset.index); // convert string to number
  const audio = document.getElementById(`bruh${index}`);
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }

  // Show "bruh" text at mouse
  bruhText.textContent = "bruh";
  bruhText.className = `bruh${index}`;
  bruhText.style.opacity = 1;

  // Show the corresponding image
  bruhImage.src = `bruhimages/bruh${index}.png`;
  bruhImage.style.opacity = 1;

  // Hide both after 500ms
  setTimeout(() => {
    bruhText.style.opacity = 0;
    bruhImage.style.opacity = 0;
  }, 500);
});

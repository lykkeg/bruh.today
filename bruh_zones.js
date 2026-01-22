console.log("NEW 40 ZONE SCRIPT LOADED");

// Grid setup
const rows = 5;
const cols = 8;
const cellWidth = 100 / cols;
const cellHeight = 100 / rows;

const bruhText = document.getElementById("bruh-text");
const bruhImage = document.getElementById("bruh-image");

// Make text follow mouse
document.addEventListener("mousemove", (e) => {
  bruhText.style.left = e.clientX + "px";
  bruhText.style.top = e.clientY + "px";
});

// Create zones
for (let r = 0; r < rows; r++) {
  for (let c = 0; c < cols; c++) {
    const index = r * cols + c + 1;

    const div = document.createElement("div");
    div.className = "zone";
    div.dataset.index = index; // store index in dataset

    div.style.top = `${r * cellHeight}%`;
    div.style.left = `${c * cellWidth}%`;
    div.style.width = `${cellWidth}%`;
    div.style.height = `${cellHeight}%`;

    document.body.appendChild(div);
  }
}

// Single click listener
document.addEventListener("click", (e) => {
  const zone = e.target.closest(".zone");
  if (!zone) return;

  const index = zone.dataset.index;
  const audio = document.getElementById(`bruh${index}`);
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }

  bruhText.textContent = "bruh";
  bruhText.className = `bruh${index}`;
  bruhText.style.opacity = 1;

  bruhImage.src = `bruhimages/bruh${index}.png`;
  bruhImage.style.opacity = 1;

  setTimeout(() => {
    bruhText.style.opacity = 0;
    bruhImage.style.opacity = 0;
  }, 500);
});

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

// Create grid zones
for (let r = 0; r < rows; r++) {
  for (let c = 0; c < cols; c++) {
    const index = r * cols + c + 1;

    const div = document.createElement("div");
    div.className = "zone";

    // Position each zone
    div.style.top = `${r * cellHeight}%`;
    div.style.left = `${c * cellWidth}%`;
    div.style.width = `${cellWidth}%`;
    div.style.height = `${cellHeight}%`;

    // Click handler for each zone
    div.onclick = () => {
      // Play the corresponding audio
      const audio = document.getElementById(`bruh${index}`);
      if (audio) {
        audio.currentTime = 0;
        audio.play();
      }

      // Show the "bruh" text at the mouse
      bruhText.textContent = "bruh";
      bruhText.className = `bruh${index}`;
      bruhText.style.opacity = 1;

      // Show the centered image
      bruhImage.src = `bruhimages/bruh${index}.png`;
      bruhImage.style.opacity = 1;

      // Hide both after 500ms
      setTimeout(() => {
        bruhText.style.opacity = 0;
        bruhImage.style.opacity = 0;
      }, 500);
    };

    // Add the zone to the page
    document.body.appendChild(div);
  }
}

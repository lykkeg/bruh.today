console.log("NEW 40 ZONE SCRIPT LOADED");

const rows = 5;
const cols = 8;

const cellWidth = 100 / cols;
const cellHeight = 100 / rows;

const bruhText = document.getElementById("bruh-text");

// Track mouse
document.addEventListener("mousemove", (e) => {
  bruhText.style.left = e.clientX + "px";
  bruhText.style.top = e.clientY + "px";
});

for (let r = 0; r < rows; r++) {
  for (let c = 0; c < cols; c++) {
    const index = r * cols + c + 1;

    const div = document.createElement("div");
    div.className = "zone";

    div.style.top = `${r * cellHeight}%`;
    div.style.left = `${c * cellWidth}%`;
    div.style.width = `${cellWidth}%`;
    div.style.height = `${cellHeight}%`;

    div.onclick = () => {
      const audio = document.getElementById(`bruh${index}`);
      if (audio) {
        audio.currentTime = 0;
        audio.play();
      }

      // Use CSS class instead of inline styles
      bruhText.textContent = "bruh";
      bruhText.className = `bruh${index}`;

  console.log("Applied class:", bruhText.className);
  
      bruhText.style.opacity = 1;

      setTimeout(() => {
        bruhText.style.opacity = 0;
      }, 500);
    };

    document.body.appendChild(div);
  }
}

const container = document.querySelector("#container");

const grid = 16;
document.documentElement.style.setProperty("--grid-size", grid);

for (let i = 0; i < grid * grid; i++) {
  const cell = document.createElement("div");
  cell.id = `cell-${i + 1}`;
  cell.classList.add("grid-cell");
  container.appendChild(cell);
}

let isDrawing = false;

function handleMouseOver(e) {
  if (!isDrawing) return;

  if (e.target.classList.contains("grid-cell")) {
    e.target.style.backgroundColor = "black";
  }
}

container.addEventListener("mousedown", (event) => {
  isDrawing = true;

  event.target.style.backgroundColor = "black";
  container.addEventListener("mouseover", (event) => handleMouseOver(event));
});

container.addEventListener("mouseup", () => {
  isDrawing = false;
});

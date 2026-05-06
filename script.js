const container = document.querySelector("#container");

const grid = 16;
document.documentElement.style.setProperty("--grid-size", grid);

for (let i = 0; i < grid * grid; i++) {
  const cell = document.createElement("div");
  cell.id = `cell-${i + 1}`;
  cell.classList.toggle("grid-cell");
  container.append(cell);
}

const container = document.querySelector("#container");

let grid = 16;
defineGridSize(16);

function defineGridSize(size) {
  grid = size;
  document.documentElement.style.setProperty("--grid-size", size);
  createGrid();
}

function createGrid() {
  container.innerHTML = "";

  for (let i = 0; i < grid * grid; i++) {
    const cell = document.createElement("div");
    cell.id = `cell-${i + 1}`;
    cell.classList.add("grid-cell");
    container.appendChild(cell);
  }
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

const gridBtn = document.querySelector("#grid-btn");
gridBtn.addEventListener("click", () => {
  let input;

  do {
    input = window.prompt(
      "Enter a number to the desired grid size. (Min 1 - Max 100)",
    );

    // se cancelar, sai
    if (input === null) return;
  } while (input === "" || isNaN(input) || input < 1 || input > 100);

  defineGridSize(input);
});

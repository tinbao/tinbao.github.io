// Constant with Pokemon pack images
var pokemonTCGBoosterPacks = 
[
    ["Pack Name", "1", "2", "3", "4"]
    ["LOST ORIGIN", "lost_origin_1", "lost_origin_2", "lost_origin_3", "lost_origin_4"]
]

// Create a new table to store the Pokemon TCG booster pack images.
var table = document.createElement("table");

// Add a header row to the table
const headerRow = document.createElement("tr");
for (var i = 0; i < pokemonTCGBoosterPacks[0].length; i++) {
  const headerCell = document.createElement("td");
  headerCell.textContent = key;
  headerRow.appendChild(headerCell);
}
table.appendChild(headerRow);

// Loop through the Pokemon TCG booster pack images and add them to the table.
for (var i = 1; i < pokemonTCGBoosterPacks.length - 1; i++) {
  var row = document.createElement("tr");

  // Add the image to the row.
  for (var j = 0; j < pokemonTCGBoosterPacks[i].length - 1; j++) {
    var image = document.createElement("td");
    // Set a uniform size
    image.style.maxWidth = '100px';
    image.style.maxHeight = '100px';
    image.innerHTML = "<img src=resources/" + pokemonTCGBoosterPacks[i][j] + ".jpg>";
    row.appendChild(image);
  }

  // Add the row to the table.
  table.appendChild(row);
}

// Scale the images to 100px
for (const image of table.querySelectorAll("img")) {
    image.style.width = "100px";
}

// Set the onclick event for each row to toggle the color of the image
for (const row of table.querySelectorAll("tr")) {
  row.addEventListener("click", () => {
    const image = row.querySelector("img");
    image.style.color = image.style.color === "black" ? "white" : "black";
  });
}

// Add the table to the document.
document.body.appendChild(table);

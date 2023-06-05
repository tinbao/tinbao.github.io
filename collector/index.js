// Constant with Pokemon pack images
const pokemonTCGBoosterPacks = 
[
    ["swsh11_logo", "lost_origin_1", "lost_origin_2", "lost_origin_3", "lost_origin_4"],
    ["swsh12_logo", "silver_tempest_1", "silver_tempest_2", "silver_tempest_3", "silver_tempest_4"],
    ["swsh12pt5_logo", "crown_zenith_1"]
]

// Create a new table to store the booster pack images.
var table = document.createElement("table");

// Loop through the booster pack images and add them to the table.
for (var i = 0; i < pokemonTCGBoosterPacks.length; i++) {
  var row = document.createElement("tr");

  // Add the image to the row.
  for (var j = 0; j < pokemonTCGBoosterPacks[i].length; j++) {
    if (j == 0) {
        var image = document.createElement("td");
        image.innerHTML = "<img src=resources/" + pokemonTCGBoosterPacks[i][j] + ".jpg class=logo>";
        image.id = pokemonTCGBoosterPacks[i][j];
        row.appendChild(image);
        continue;
    }

    var cell = document.createElement("td");

    var input = document.createElement("input");
    input.type = "checkbox";
    input.id = pokemonTCGBoosterPacks[i][j];
    cell.appendChild(input);

    var label = document.createElement("label");
    label.className = "custom-checkbox";
    label.htmlFor = pokemonTCGBoosterPacks[i][j];
    label.innerHTML = "<img src=resources/" + pokemonTCGBoosterPacks[i][j] + ".jpg class=booster>";

    cell.appendChild(label);
    row.appendChild(cell);
  }

  // Add the row to the table.
  table.appendChild(row);
}

// Add the table to the document.
document.body.appendChild(table);
// Constant with Pokemon pack images
var pokemonTCGBoosterPackImages = ["lost_origin_1", "lost_origin_2", "lost_origin_3", "lost_origin_4"]

// Create a new table to store the Pokemon TCG booster pack images.
var table = document.createElement("table");

// Loop through the Pokemon TCG booster pack images and add them to the table.
for (var i = 0; i < pokemonTCGBoosterPackImages.length; i++) {
  var row = document.createElement("tr");

  // Add the image to the row.
  var image = document.createElement("td");
  image.innerHTML = "<img src=resources/" + pokemonTCGBoosterPackImages[i] + ".jpg>";

  // Set a uniform size
  image.style.maxWidth = '100px';
  image.style.maxHeight = '100px';

  row.appendChild(image);

  // Add a checkbox to the row.
  var checkbox = document.createElement("td");
  checkbox.innerHTML = "<input type='checkbox'>";
  row.appendChild(checkbox);

  // Add the row to the table.
  table.appendChild(row);
}

// Add the table to the document.
document.body.appendChild(table);

// Handle the checkbox click event.
document.querySelectorAll("input[type='checkbox']").forEach(function(checkbox) {
  checkbox.addEventListener("click", function() {
    // If the checkbox is checked, color the image.
    if (checkbox.checked) {
      this.parentElement.querySelector("img").style.color = "red";
    } else {
      // If the checkbox is unchecked, gray the image.
      this.parentElement.querySelector("img").style.color = "gray";
    }
  });
});
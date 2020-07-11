// from data.js
var sight_data = data;
var tbody = d3.select("tbody");
// YOUR CODE HERE!
sight_data.forEach((ufodata) => {
    var row = tbody.append("tr");
    Object.entries(ufodata).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#datetime");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", filterresult);
form.on("submit",filterresult);

function filterresult() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    // Print the value to the console
    console.log(inputValue);
  
    var resultable = sight_data.filter(sight_data => sight_data.datetime === inputValue);
    setFilter(resultable);
  }




  function setFilter(dataFilter) {

    tbody.html("");
    dataFilter.forEach((r) => {
        tbody.append("tr");
        Object.entries(r).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
  };
  
  sight_data.forEach((ufodata) => {
    var row = tbody.append("tr");
    Object.entries(ufodata).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
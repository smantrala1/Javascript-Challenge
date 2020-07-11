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


// Select the buttons
var filterbutton = d3.select("#filter-btn");

// Select the form
var form = d3.select("#datetime");

// Create event handlers for clicking the button or pressing the enter key
filterbutton.on("click", filterresult);
form.on("submit",filterresult);

function filterresult() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node - datetime
    var inputdatetime = d3.select("#datetime");
    //city
    var inputc = d3.select("#city") ;
    //state
    var inputs = d3.select("#state") ;
    //country
    var inputcntry = d3.select("#country") ;
    //shape
    var inputsh = d3.select("#shape") ;
    
    // datetime
    var inputdt = inputdatetime.property("value");
    //city
    var inputcity = inputc.property("value");
    //state
    var inputstate = inputs.property("value");
    //country
    var inputcountry = inputcntry.property("value");
    //shape
    var inputshape = inputsh.property("value");    

    // Print the values to the console
    console.log(inputdt);
    console.log(inputcity);
    console.log(inputstate);
    console.log(inputcountry);
    console.log(inputshape);
    console.log(sight_data);
    filtered_data = sight_data;
    //filtering data: 
    if (inputdt!=""){
      filtered_data = filtered_data.filter(filtered_data=>filtered_data.datetime==inputdt);
    }
    if (inputcity!=""){
      filtered_data = filtered_data.filter(filtered_data=>filtered_data.city==inputcity);
    }
    if (inputstate!=""){
      filtered_data = filtered_data.filter(filtered_data=>filtered_data.state==inputstate);
    }
    if (inputcountry!=""){
      filtered_data = filtered_data.filter(filtered_data=>filtered_data.country==inputcountry);
    }
    if (inputshape!=""){
      filtered_data = filtered_data.filter(filtered_data=>filtered_data.shape==inputshape);
    }
    setFilter(filtered_data);
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
  //reset the page
  d3.select("#reset-btn").on("click", function(event) {
    location.reload();
  })
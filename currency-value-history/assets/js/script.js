async function getResults() {
  "use strict";

  // Get a reference to the form - Use the ID of the form
  let form = $("#myform");

  // Validate all of the form elements
  form.validate();

  // If all of the form elements are valid, the get the form values
  if (form.valid()) {
    let baseCurrency = document.getElementById("baseCurrency").value;
    let toCurrency = document.getElementById("toCurrency").value;
    let apiKey = "QGs1d8pA7SJAOUFmg0N9A2CZaKxbXLvq";
    let FromDate = document.getElementById("FromDate").value;
    let ToDate = document.getElementById("ToDate").value;

    /* URL for AJAX Call */
    let myURL =
      "https://api.polygon.io/v2/aggs/ticker/C:" +
      baseCurrency +
      toCurrency +
      "/range/1/day/" +
      FromDate +
      "/" +
      ToDate +
      "?unadjusted=false&sort=asc&limit=32&apiKey=" +
      apiKey;
    /* Make the AJAX call */
    let msg1Object = await fetch(myURL);
    /* Check the status */
    if (msg1Object.status >= 200 && msg1Object.status <= 299) {
      let msg1JSONText = await msg1Object.text();
      // Parse the JSON string into an object
      let msg1 = JSON.parse(msg1JSONText);
      /* Your code to process the result goes here - 
               display the returned message */
      let stockdate = [];
      let stockvalue = [];
      let stockvolume = [];
      let numdays = msg1.results.length;
      if (numdays > 0) {
        for (let i = 0; i < numdays; i++) {
          /* stock close value */
          stockvalue[i] = msg1.results[i].c;
          /* stock volume */
          stockvolume[i] = msg1.results[i].v;
          /* date is in Unix milleseconds - create a temporary date letiable */
          let tempdate = new Date(msg1.results[i].t);
          /* extract the date string from the value */
          stockdate[i] = tempdate.toLocaleDateString();
        }
      }

      let ctx0 = document.getElementById("chartjs-0");
      var myChart = new Chart(ctx0, {
        type: "line",
        data: {
          labels: dates,
          datasets: [
            {
              data: values,
              fill: false,
            },
          ],
        },
        options: {
          responsive: false,
          maintainAspectRatio: true,
        },
      });

      var ctx1 = document.getElementById("chartjs-1");
    } else {
      /* AJAX completed with error - probably invalid stock ticker symbol */
      alert("Stock Not Found - Status: " + msg1Object.status);
      return;
    }
  }
}

function clearForm() {
  document.getElementById("baseCurrency").value = "";
  document.getElementById("toCurrency").value = "";
  document.getElementById("FromDate").value = "";
  document.getElementById("ToDate").value = "";
  document.getElementById("company").innerHTML = "";
  document.getElementById("address").innerHTML = "";
  document.getElementById("employees").innerHTML = "";
  document.getElementById("ceo").innerHTML = "";
  document.getElementById("url").innerHTML = "";
  document.getElementById("url").href = "";
  document.getElementById("logo").src = "";
  document.getElementById("StockValueTable").innerHTML = "";
  document.getElementById("StockVolumeTable").innerHTML = "";

  /* Ugly Code to Erase Canvas */
  var canvas0 = document.getElementById("chartjs-0");
  var context0 = canvas0.getContext("2d");
  context0.clearRect(0, 0, canvas0.width, canvas0.height);
  var canvas1 = document.getElementById("chartjs-1");
  var context1 = canvas1.getContext("2d");
  context1.clearRect(0, 0, canvas1.width, canvas1.height);
}

async function getData() {
  "use strict";

  // Get a reference to the form - Use the ID of the form
  let form = $("#myform");

  // Validate all of the form elements
  form.validate();

  // If all of the form elements are valid, the get the form values
  if (form.valid()) {
    let siteChoice = document.getElementById("siteChoice").value;

    /* URL for AJAX Call */
    let myURL =
      "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=" +
      siteChoice +
      "&indent=on&period=P7D&siteStatus=all&parameterCd=00065";
    let msgObject = await fetch(myURL);
    if (msgObject.status >= 200 && msgObject.status <= 299) {
      let msgJSONText = await msgObject.text();
      // Parse the JSON string into an object
      let msg = JSON.parse(msgJSONText);

      let dates = [];
      let values = [];
      /* fLen contains the length of the array (number of values) */
      let fLen = msg.value.timeSeries[0].values[0].value.length;
      for (let i = 0; i < fLen; i++) {
        values[i] = msg.value.timeSeries[0].values[0].value[i].value;
        dates[i] = new Date(
          msg.value.timeSeries[0].values[0].value[i].dateTime
        ).toLocaleString();
      }
      let sitename = msg.value.timeSeries[0].sourceInfo.siteName;
      let sitecode = msg.value.timeSeries[0].sourceInfo.siteCode[0].value;
      let siteDescription =
        msg.value.timeSeries[0].variable.variableDescription;

      let ctx0 = document.getElementById("chartjs-0");
      var myChart = new Chart(ctx0, {
        type: "line",
        data: {
          labels: dates,
          datasets: [
            {
              label: sitename,
              data: values,
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              lineTension: 0.1,
            },
          ],
        },
        options: {
          responsive: false,
          maintainAspectRatio: true,
          title: {
            display: true,
            text: sitename + " Code: " + sitecode,
          },
        },
      });
    } else {
      /* AJAX completed with error - probably invalid stock ticker symbol */
      alert("Site Data Not Found - Status: " + msgObject.status);
      return;
    }
  }
}

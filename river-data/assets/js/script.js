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
    let msg1Object = await fetch(myURL);
    if (msg1Object.status >= 200 && msg1Object.status <= 299) {
      let msg1JSONText = await msg1Object.text();
      // Parse the JSON string into an object
      console.log(msg1JSONText);
      let msg1 = JSON.parse(msg1JSONText);
      console.log(msg1);
    } else {
      /* AJAX completed with error - probably invalid stock ticker symbol */
      alert("Site Data Not Found - Status: " + msg1Object.status);
      return;
    }
  }
}

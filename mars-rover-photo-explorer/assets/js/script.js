$("#roverForm").validate({});

function setDate() {
  let tempdate = document.getElementById("picdate");

  if (document.getElementById("Curiosity").checked) {
    tempdate.value = "2012-08-06";
    tempdate.min = "2012-08-06";
    tempdate.max = "2019-09-28";
  }

  if (document.getElementById("Opportunity").checked) {
    tempdate.value = "2004-01-26";
    tempdate.min = "2004-01-26";
    tempdate.max = "2018-06-11";
  }

  if (document.getElementById("Spirit").checked) {
    tempdate.value = "2004-01-05";
    tempdate.min = "2004-01-05";
    tempdate.max = "2004-03-21";
  }
}

async function findImages() {
  let roverChoice = getRover();
  let dateChoice = document.getElementById("picdate").value;

  let myURL =
    "https://api.nasa.gov/mars-photos/api/v1/rovers/" +
    roverChoice +
    "/photos?earth_date=" +
    dateChoice +
    "&page=1&api_key=DEMO_KEY";

  let msg = await fetch(myURL);
  /* Check the status */
  if (msg.status >= 200 && msg.status <= 299) {
    let msgJSONText = await msg.text();
    // Parse the JSON string into an object
    let msg1 = JSON.parse(msgJSONText);
    if (msg1.photos.length) {
      for (i = 0; i < msg1.photos.length; i++) {
        document.getElementById("img" + i).src = msg1.photos[i].img_src;
        document.getElementById("img" + i).title =
          msg1.photos[i].camera.full_name;
        document.getElementById("a" + i).href = msg1.photos[i].img_src;
      }
    }

    if (msg1.photos.length === 0) {
      document.getElementById("numResults").innerHTML = "No results.";
    } else {
      document.getElementById("numResults").innerHTML =
        "There were " + msg1.photos.length + " results.";
    }
  }
}

function clearForm() {
  document.getElementById("Curiosity").checked = false;
  document.getElementById("Opportunity").checked = false;
  document.getElementById("Spirit").checked = false;
  document.getElementById("picdate").value = "";
  document.getElementById("picdate").min = "";
  document.getElementById("picdate").max = "";
  document.getElementById("numResults").innerHTML = "";
  document.getElementById("error").innerHTML = "";

  for (i = 0; i < 25; i++) {
    document.getElementById("img" + i).src = "";
    document.getElementById("img" + i).title = "";
    document.getElementById("a" + i).href = "";
  }
}

function getRover() {
  if (document.getElementById("Curiosity").checked) {
    return document.getElementById("Curiosity").value;
  }

  if (document.getElementById("Opportunity").checked) {
    return document.getElementById("Opportunity").value;
  }

  if (document.getElementById("Spirit").checked) {
    return document.getElementById("Spirit").value;
  }
}

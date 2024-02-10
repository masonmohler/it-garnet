async function doConversion() {
  let fromValue = document.getElementById("FromValue").value;
  let fromUnit = getFromUnit();
  let toUnit = getToUnit();

  let myURL =
    "https://brucebauer.info/assets/ITEC3650/unitsconversion.php?FromValue=" +
    fromValue +
    "&FromUnit=" +
    fromUnit +
    "&ToUnit=" +
    toUnit;

  /* Fetch the data */
  let myConversion = await fetch(myURL);
  let myConversionResult = await myConversion.text();

  /* Display the result */
  document.getElementById("ToValue").innerHTML = myConversionResult;
}

function getFromUnit() {
  if (document.getElementById("fromCM").checked) {
    return document.getElementById("fromCM").value;
  }
  if (document.getElementById("fromM").checked) {
    return document.getElementById("fromM").value;
  }
  if (document.getElementById("fromKM").checked) {
    return document.getElementById("fromKM").value;
  }
  if (document.getElementById("fromIN").checked) {
    return document.getElementById("fromIN").value;
  }
  if (document.getElementById("fromFT").checked) {
    return document.getElementById("fromFT").value;
  }
  if (document.getElementById("fromYD").checked) {
    return document.getElementById("fromYD").value;
  }
  if (document.getElementById("fromMI").checked) {
    return document.getElementById("fromMI").value;
  }
}

function getToUnit() {
  if (document.getElementById("toCM").checked) {
    return document.getElementById("toCM").value;
  }
  if (document.getElementById("toM").checked) {
    return document.getElementById("toM").value;
  }
  if (document.getElementById("toKM").checked) {
    return document.getElementById("toKM").value;
  }
  if (document.getElementById("toIN").checked) {
    return document.getElementById("toIN").value;
  }
  if (document.getElementById("toFT").checked) {
    return document.getElementById("toFT").value;
  }
  if (document.getElementById("toYD").checked) {
    return document.getElementById("toYD").value;
  }
  if (document.getElementById("toMI").checked) {
    return document.getElementById("toMI").value;
  }
}

function clearForm() {
  document.getElementById("FromValue").value = "";
  document.getElementById("ToValue").innerHTML = "";
  document.getElementById("fromCM").checked = false;
  document.getElementById("fromM").checked = false;
  document.getElementById("fromKM").checked = false;
  document.getElementById("fromIN").checked = false;
  document.getElementById("fromFT").checked = false;
  document.getElementById("fromYD").checked = false;
  document.getElementById("fromMI").checked = false;
  document.getElementById("toCM").checked = false;
  document.getElementById("toM").checked = false;
  document.getElementById("toKM").checked = false;
  document.getElementById("toIN").checked = false;
  document.getElementById("toFT").checked = false;
  document.getElementById("toYD").checked = false;
  document.getElementById("toMI").checked = false;
}

$("#UnitConversionForm").validate({});

$("#CircleForm").validate({});

function displayResult() {
  if ($("#CircleForm").valid()) {
    document.getElementById("diameter").innerHTML = "";
    document.getElementById("circumference").innerHTML = "";
    document.getElementById("area").innerHTML = "";

    let radius = parseFloat(document.getElementById("radius").value);
    let diameter = calcDiameter(radius);
    let circumference = calcCircumference(radius);
    let area = calcArea(radius);

    document.getElementById("diameter").innerHTML = diameter.toString();
    document.getElementById("circumference").innerHTML =
      circumference.toString();
    document.getElementById("area").innerHTML = area.toString();
  }
}

function calcDiameter(radius) {
  return radius * 2;
}

function calcCircumference(radius) {
  return Math.PI * (radius * 2);
}

function calcArea(radius) {
  return Math.PI * (radius * radius);
}

function clearForm() {
  document.getElementById("diameter").innerHTML = "";
  document.getElementById("circumference").innerHTML = "";
  document.getElementById("area").innerHTML = "";
  document.getElementById("radius").value = "";
}

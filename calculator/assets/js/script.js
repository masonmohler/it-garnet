function doCalculation() {
  if ($("#CalculatorForm").valid()) {
    let op1 = parseFloat(document.getElementById("op1").value);
    let op2 = parseFloat(document.getElementById("op2").value);

    if (document.getElementById("add").checked) {
      let result = op1 + op2;
      document.getElementById("result").innerHTML = result;
    }
    if (document.getElementById("subtract").checked) {
      let result = op1 - op2;
      document.getElementById("result").innerHTML = result;
    }
    if (document.getElementById("multiply").checked) {
      let result = op1 * op2;
      document.getElementById("result").innerHTML = result;
    }
    if (document.getElementById("divide").checked) {
      let result = op1 / op2;
      document.getElementById("result").innerHTML = result;
    }
  }
}

$("#CalculatorForm").validate({});

function clearForm() {
  document.getElementById("op1").value = "";
  document.getElementById("op2").value = "";
  document.getElementById("result").innerHTML = "";
  document.getElementById("add").checked = false;
  document.getElementById("subtract").checked = false;
  document.getElementById("multiply").checked = false;
  document.getElementById("divide").checked = false;
}

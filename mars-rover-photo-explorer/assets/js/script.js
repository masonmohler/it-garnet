$("#roverForm").validate({});

function setDate() {
  if (document.getElementById("#Curiosity").checked) {
    let startDate = document.getElementById("#Curiosity").value;
    document.getElementById("#picdate").value = startDate;
  }
}

async function findImages() {}

function clearForm() {}

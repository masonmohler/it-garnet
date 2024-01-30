const expand = document.getElementById("expand");
const labsList = document.getElementById("labsList");
labsList.style.display = "none";

expand.addEventListener("click", function () {
  if (labsList.style.display == "none") {
    labsList.style.display = "initial";
    expand.innerHTML = "Positioning Labs - Click to collapse list &uarr;";
  } else {
    labsList.style.display = "none";
    expand.innerHTML = "Positioning Labs - Click to expand list &darr;";
  }
});

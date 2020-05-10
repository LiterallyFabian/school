function hamburger() {
  var x = document.getElementById("myLinks"); //gömmer länkarna under menyn
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
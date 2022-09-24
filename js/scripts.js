function submitMessage() {
  document.getElementById("loading").style.display = "block";
  setTimeout(function () {
    document.getElementById("loading").style.display = "none";
    document.getElementById("success").style.display = "block";
    document.getElementById("myForm").reset();
  }, 1000);
  setTimeout(function () {
    document.getElementById("success").style.display = "none";
  }, 4000);
  return false;
}

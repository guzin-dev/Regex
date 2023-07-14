function verifyInput() {
  let inputValue = document.getElementById("input").value;
  document.getElementById("input").value = inputValue.replace(/\D/g, "");
}

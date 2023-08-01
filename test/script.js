const showPopupButton = document.getElementById("showPopupButton");
const popupContainer = document.getElementById("popupContainer");
const submitButton = document.getElementById("submitButton");
const inputName = document.getElementById("inputName");

showPopupButton.addEventListener("click", function() {
  popupContainer.style.display = "flex";
});

submitButton.addEventListener("click", function() {
  const name = inputName.value;
  if (name.trim() !== "") {
    alert("Hello, " + name + "!"); // Show a greeting with the user's input
    popupContainer.style.display = "none";
  } else {
    alert("Please enter a valid name."); // Show a message if the user did not enter a valid name
  }
});

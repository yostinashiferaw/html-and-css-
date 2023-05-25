document.getElementById("viewData").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  var name = document.getElementById("name").value;
  var surname = document.getElementById("surname").value;
  var phone = document.getElementById("phone").value;

  // Display form values in the container
  document.getElementById("displayedName").textContent = "Name: " + name;
  document.getElementById("displayedSurname").textContent = "Surname: " + surname;
  document.getElementById("displayedPhone").textContent = "Telephone number: " + phone;
});

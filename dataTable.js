let nameInput = document.getElementById("name");
let ageInput = document.getElementById("age");
let emailInput = document.getElementById("email");

let addBtn = document.getElementById("addBtn");
let tableBody = document.querySelector("tbody");

addBtn.addEventListener("click", function(e) {
    e.preventDefault();

    let name = nameInput.value.trim();
    let ageStr = ageInput.value.trim();
    let email = emailInput.value.trim();

    if (!name || !ageStr || !email) {
        alert("Please fill in all fields.");
        return; 
    }

    if (name.length < 3) {
        alert("The name must be more than two letters.");
        return;
    }

    let age = parseInt(ageStr);
    if (isNaN(age) || age <= 18) {
        alert("Age must be over 18");
        return;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    let newRow = document.createElement("tr");

    let nameCell = document.createElement("td");
    nameCell.textContent = name;

    let ageCell = document.createElement("td");
    ageCell.textContent = age;

    let emailCell = document.createElement("td");
    emailCell.textContent = email;

    newRow.appendChild(nameCell);
    newRow.appendChild(ageCell);
    newRow.appendChild(emailCell);

    tableBody.appendChild(newRow);

    nameInput.value = "";
    ageInput.value = "";
    emailInput.value = "";
});

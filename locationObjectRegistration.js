function openPopup() {
    const popupWindow = window.open("locationObjectWelcome.html", "_self");

}

let submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
    e.preventDefault();
    openPopup();
});
let timeoutId;
let countdownId;
let timeLeft = 30;

function startTimer() {
    clearTimeout(timeoutId);
    clearInterval(countdownId);
    timeLeft = 30;

    countdownId = setInterval(() => {
        document.getElementById("countdown").textContent = `Time left: ${timeLeft} seconds`;
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(countdownId);
        }
    }, 1000);

    timeoutId = setTimeout(function () {
        let inputs = document.querySelectorAll("input");
        let allEmpty = true;

        inputs.forEach(input => {
            if (input.value.trim() !== "") {
                allEmpty = false;
            }
        });

        if (allEmpty) {
            document.body.innerHTML = "<h1>Time Out</h1>";
        }
    }, 30000);
}

startTimer();

document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", startTimer);
});


submit.addEventListener("click", (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.querySelector('input[type="tel"]').value.trim();
    let password = document.querySelector('input[type="password"]').value.trim();
    let address = document.querySelector('input[placeholder="Enter your address"]').value.trim();
    let jobTitle = document.querySelector('input[placeholder="Enter your job title"]').value.trim();

    let genderInput = document.querySelector('input[name="gender"]:checked');
    let gender = genderInput ? (genderInput.id === "radio1" ? "Male" : "Female") : "";

    if (name.length < 3) {
        alert("Name must be more than two characters");
        return;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return;
    }

    let phonePattern = /^[0-9]{11}$/;
    if (!phonePattern.test(phone)) {
        alert("Phone number must be 11 digits");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return;
    }

    if (!address) {
        alert("Please enter your address");
        return;
    }

    if (!jobTitle) {
        alert("Please enter your job title");
        return;
    }

    if (!gender) {
        alert("Please select your gender");
        return;
    }

    let formData = {
        name,
        email,
        phone,
        password,
        address,
        jobTitle,
        gender
    };

    localStorage.setItem("formData", JSON.stringify(formData));

    openPopup();
});

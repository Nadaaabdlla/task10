// form
let userName=document.getElementById("name");
let userAge=document.getElementById("age");
let userEmail=document.getElementById("email");
let addBtn=document.getElementById("addBtn");
let resetBtn=document.getElementById("resetBtn");
//validation
userName.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        let userName = this.value.trim();
        if (userName.length > 2) {
        } else {
            alert("The name must be more than two letters ❌");
        }
    }
});
userAge.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        if (userAge.value<18) {
        } else {
            alert("you must be older that 18 ❌");
        }
    }
});

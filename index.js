document.getElementById("contact-form").addEventListener("submit", function(e){
    e.preventDefault();
    
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();
    let msg = document.getElementById("formMessage");
    let phonePattern = /^[0-9]{10}$/;

    if (name === "" || email === "" || phone === "" || message === "") {
        msg.innerText = "All fields are required!";
        msg.style.color = "red";
    } 
    else if (!email.includes("@")) {
        msg.innerText = "Please enter a valid email!";
        msg.style.color = "red";
    }
    else if (!phonePattern.test(phone)) {
        msg.innerText = "Phone number must be 10 digits only!";
        msg.style.color = "red";
    }
    else {
        msg.innerText = "Message sent successfully!";
        msg.style.color = "green";
    }
});
const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkBtn.textContent = "☀️ Light Mode";
    } else {
        darkBtn.textContent = "🌙 Dark Mode";
    }
});


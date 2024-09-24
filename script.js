function checkPassword() {
    var inputPassword = document.getElementById("pass").value;
    var correctPassword = "SATIS";
    var messageElement = document.getElementById("message");

    if (inputPassword === correctPassword) {
        messageElement.textContent = "Password correct!";
        messageElement.style.color = "green";
    } else {
        messageElement.textContent = "Incorrect password. Try again.";
        messageElement.style.color = "red";
    }
}

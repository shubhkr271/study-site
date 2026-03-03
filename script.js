function checkPassword() {
    // Prompt the user for a password
    var password = prompt("Enter the password to access this link:");

    // Check if the password is correct
    if (password === "mySecret123") {  // replace with your desired password
        return true; // allow navigation
    } else {
        alert("Incorrect password. Access denied.");
        return false; // block navigation
    }
}
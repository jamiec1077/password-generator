function generatePassword() {
    var length = prompt("Enter the desired length of your password (between 8 and 128 characters): ");
    if (length < 8 || length > 128) {
        alert("Invalid length. Please enter a value between 8 and 128.");
        return;
    }

    var includeLowercase = confirm("Do you want to include lowercase letters?");
    var includeUppercase = confirm("Do you want to include uppercase letters?");
    var includeNumeric = confirm("Do you want to include numeric characters?");
    var includeSpecial = confirm("Do you want to include special characters?");

    let charset = "";
    if (includeLowercase) {
        charset += "abcdefghijklmnopqrstuvwxyz";
    }
    if (includeUppercase) {
        charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (includeNumeric) {
        charset += "0123456789";
    }
    if (includeSpecial) {
        charset += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    }

    if (charset === "") {
        alert("Please select at least one character type.");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }

   var passwordOutput = document.querySelector("#password");
    passwordOutput.textContent = password;
}
let generatePasswordInput = document.querySelector(".create_password");
let generatePasswordButton = document.querySelector(".generate_button");
let copyPasswordButton = document.querySelector(".copy_button");

generatePasswordButton.addEventListener('click', generate_passwords);
copyPasswordButton.addEventListener('click', copy_password);
function generate_passwords(){
    let password_text = "1234567890qwertyuioplkjhgfdsazxcvbnmMNBVCXZLKJHGFDSAPOIUYTREQ#$%%@$@#()&%#$#";
    let password_length = 12
    let password = "";

    for(let i = 0; i <= password_length; i++){
        let password_random_letters = Math.floor(Math.random() * password_text.length)
        password += password_text.substring(password_random_letters, password_random_letters + 1);
        generatePasswordInput.value = password;
    }
}

function copy_password(){
    let copyPassword = document.querySelector(".create_password");
    copyPassword.select(); // to select the text area
    copyPassword.setSelectionRange(0, 9999);
    document.execCommand("copy");
    document.querySelector(".text_copied").textContent = "Text Copied"
}
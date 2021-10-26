let passwordText = document.getElementById('privateKey')
let button = document.getElementById('login_btn')
const errorDiv = document.getElementById('errors')
let attempts = 3;
const login = () => {
    let pass = passwordText.value;


    if (pass === '') {
        errorDiv.innerText = "Please Enter a Private Key"
        return;
    }

    else if (pass === '#123NIRjhor') {
        errorDiv.innerText = ''
        alert('Sucessfully Logged in');
        window.location.href = "patient.html";

        passwordText.value = "";
    }
    else {
        errorDiv.innerText = '';
        if (attempts === 0) {
            alert('No Login attempts Available')
        }
        else {
            attempts = attempts - 1;
            alert("Login Failed Now Only " + attempts + " Login Attempts Available");
            if (attempts == 0) {
                passwordText.disabled = true;
                button.disabled = true;

            }

        }


    }
}
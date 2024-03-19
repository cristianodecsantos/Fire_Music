const form = document.querySelector("#form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Por favor, preencha o seu e-mail ou nome de usuário.")
        return;
    }

    if(!validatePassword(passwordInput.value, 8)) {
        alert("A senha precisa ser no mínimo de 8 dígitos.")

    }

    form.submit();
});

function isEmailValid(email) {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if (emailRegex.test(email)) {
        return true;
    }

    return false;

}

function validatePassword(password, minDigts) {
    if(password.length >= minDigits) {
        return true
    }

    return false;
}


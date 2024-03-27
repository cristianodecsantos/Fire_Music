const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordConfirmation = document.getElementById("password-confirmation")

form.addEventListener("submit", (Event) => {
    Event.preventDefault();
    checkForm();
})

email.addEventListener("blur", () => {
    checkInputEmail();
})

username.addEventListener("blur", () => {
    checkInputUsername();
})

password.addEventListener("blur", () => {
    checkInputPassword();
})

passwordConfirmation.addEventListener("blur", () => {
    checkInputPasswordConfirmation();
})

function checkInputUsername(){
    const usernameValue = username.value;
    const formItem = username.parentElement;
    usernameValue === "" ? errorInput(username, "Preencha o campo obrigatório !") : (formItem.className = "form-content")
    
    // if (usernameValue === ""){
    //     errorInput(username, "Preencha o campo obrigatório !")
    // } else{
    //     const formItem = username.parentElement;
    //     formItem.className = "form-content"
    // }
}

function checkInputEmail(){
    const emailValue = email.value;
    const formItem = username.parentElement;
    emailValue === "" ? errorInput(username, "Preencha o campo obrigatório !") : (formItem.className = "form-content")
    // if (emailValue === ""){
    //     errorInput(email, "Preencha o campo obrigatório !")
    // } else{
    //     const formItem = email.parentElement;
    //     formItem.className = "form-content"
    // }
}

function checkInputPassword(){
    const passwordValue = password.value;
    
    if (passwordValue === ""){
        errorInput(password, "Preencha o campo obrigatório !")
    } else if (passwordValue.length < 8){
        errorInput(password, "A senha precisa ter no minímo 8 caracteres !")        
    } else {
        const formItem = password.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputPasswordConfirmation(){
    const passwordValue = password.value;
    const confirmationPasswordValue = passwordConfirmation.value;
    
    if (confirmationPasswordValue === ""){
        errorInput(passwordConfirmation, "A confirmação de senha é obrigatório !")
    } else if (confirmationPasswordValue !== passwordValue){
        errorInput(passwordConfirmation, "As senhas não são iguais !")        
    } else {
        const formItem = passwordConfirmation.parentElement;
        formItem.className = "form-content"
    }
}

function checkForm(){
    checkInputUsername();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConfirmation();

    const formItems = form.querySelectorAll(".form-content")
    const isValid = [...formItems] .every((item) => {
        return item.className === "form-content"
    });
    
    isValid && alert("Cadastro realizado com sucessso !")

    
}


function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")
    textMessage.innerText = message;
    formItem.className = "form-content error"
}
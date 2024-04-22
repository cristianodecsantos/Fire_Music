const form = document.querySelector('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;


form.addEventListener('submit', (event) => {
    event.preventDefault();
    emailValidate();
    passwordValidate();
    
});

function setError(index){
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}

function removeError(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

function emailValidate(){
    if(!emailRegex.test(campos[0].value))
    {
        setError(0);
    } 
    else 
    {
        removeError(0);
    }
}

function passwordValidate(){
    if(campos[1].value.length < 8)
    {
        setError(1);
    } 
    else 
    {
        removeError(1);
    }
}



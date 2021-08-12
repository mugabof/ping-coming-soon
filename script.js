const form=document.querySelector('form');
const button=form.querySelector('[type="email"]');
function checkEmail(e){
e.preventEvent();
const email=e.target.querySelector('[type="email"]').value;
if(validateEmail(email))
{
    form.classList.add('error');
}
else
{
    form.classList.remove('error');  
}
console.log(email);
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', checkEmail);
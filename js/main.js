const myForm = document.getElementById('myForm');
const first = document.getElementById("first")
const last = document.getElementById("last")
const eMail = document.getElementById("email")
const password = document.getElementById("password")

myForm.addEventListener('submit', function(e) {
    const firstNameValue = first.value.trim();
    const lastNameValue = last.value.trim();
    const eMailValue = eMail.value.trim();
    const passwordValue = password.value.trim();

    
    if(firstNameValue == ""){
        setErrorFor(first);
        e.preventDefault();
    } else {
        setSuccessFor(first);
    }
    if (lastNameValue == "") {
        setErrorFor(last);
        e.preventDefault();
    } else {
        setSuccessFor(last);
    }
    if (eMailValue == "" || !isEmail(eMailValue)){
        setErrorFor(eMail);
        e.preventDefault();
    } else {
        setSuccessFor(eMail);
    }
    if(passwordValue == ""){
        setErrorFor(password);
        e.preventDefault();
    } else {
        setSuccessFor(password);
    }
});

function isEmail(eMail) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(eMail);
}

function setErrorFor(input){
    const formControl = input.parentElement;
    formControl.className = "myForm__data error";
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = "myForm__data";
}



const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#passwordConfirm")
const spanPassword = document.querySelector(".passwords-check")
const form = document.querySelector("#userData");


let confirmFlag = 1;

passwordConfirm.addEventListener("keyup", function(event) {
    if(event.target.value !== password.value) {
        spanPassword.style.display = "block";
        confirmFlag = 0;
    } else {
        spanPassword.style.display = 'none'; 
        confirmFlag = 1;
    }
});

form.onsubmit = function() {
    return true ? confirmFlag === 1 : false
}


const doc = document;
//cisto da skratim

function crEL(element) {
    return doc.createElement(element);
}
//funkcija za brze kreiranje elemenata

const divContainer = crEL("div");
const username = crEL("input");
const password = crEL("input");
const passwordR = crEL("input");
const inputReset = crEL("input");
const inputSubmit = crEL("input");
const usernameText = crEL("p");
const passwordText = crEL("p");
const passwordRText = crEL("p");
const p = crEL("p");
//kreirani elementi

divContainer.setAttribute("id", "container");
doc.body.appendChild(divContainer);
//div u kojem ce biti sadrzaj

usernameText.innerHTML = "Username: ";
divContainer.appendChild(usernameText);
username.setAttribute("id", "username");
divContainer.appendChild(username);
//dio za username

passwordText.innerHTML = "Password: ";
divContainer.appendChild(passwordText);
password.setAttribute("id", "password");
password.setAttribute("type", "password");
divContainer.appendChild(password);
//dio za password

passwordRText.innerHTML = "Repeat password:"
divContainer.appendChild(passwordRText);
passwordR.setAttribute("id", "passwordR")
passwordR.setAttribute("type", "password");
divContainer.appendChild(passwordR);
//dio za password repeat

divContainer.appendChild(p);
//samo da napravim vertikalni spejs jedan, "enter"; sa <br> nece...
inputReset.setAttribute("type", "submit");
inputReset.setAttribute("id", "reset");
inputReset.value = "Reset";
divContainer.appendChild(inputReset);
//reset gumb

inputSubmit.setAttribute("type", "submit");
inputSubmit.setAttribute("id", "submit");
inputSubmit.value = "Submit";
divContainer.appendChild(inputSubmit);
//submit gumb

function numOfsym(num) {
    if (num > 4 && num < 17)
        return true;
}
//funkcija koja vraca true ako je value length dobar

function numAndLet(sym) {
    const regex = /^[a-z0-9]/;
    //regex iznad je rezervisan samo za slova i brojeve
    return (regex.test(sym))
}
//funkcija koja vraca true ako je znak slovo ili broj

function passwordCheck(string) {
    const format = /[ČčĆćĐđŠšŽž]/;
    let dijakriticki = 0;
    let uppercase = 0;
    let lowercase = 0;
    let number = 0;

    for (let i = 0; i < string.length; i++) {
        if (string[i] == string[i].toUpperCase() && isNaN(string[i]))
            uppercase = 1;
        if (string[i] == string[i].toLowerCase() && isNaN(string[i]))
            lowercase = 1;
        if ((!isNaN(string[i])))
            number = 1;
    }
    if (format.test(string))
        dijakriticki = 1;

    if ((uppercase + lowercase + number + dijakriticki) == 4)
        return true;

}
// funkcija koja vraca true ako su ispunjeni uslovi za password (velika i mala slova, broj, dijakriticki znak), sa ovom funkcijom sam jako zadovoljan

divContainer.addEventListener("keyup", function (e) {
    switch (e.target.id) {
        case "username": {
            if (!(numAndLet(e.key)))
                username.value = username.value.replace(/[$&+,:;=?@#|'<>.^*()%!-' ']/, '');

            if ((numOfsym(username.value.length)))
                username.style.border = "5px solid green";
            else
                username.style.border = "5px solid red";
        }
            break;

        case "password": {
            if (passwordCheck(password.value) && numOfsym(password.value.length))
                password.style.border = "5px solid green";
            else
                password.style.border = "5px solid red";

        }
            break;

        case "passwordR": {
            if (password.value == passwordR.value)
                passwordR.style.border = "5px solid green";
            else
                passwordR.style.border = "5px solid red";

        }
            break;
    }

});
//event listener nad divom za keyup... switch se unutra radi po target id-u... 

divContainer.addEventListener("click", function (e) {
    switch (e.target.id) {
        case "reset": {

            username.value = "";
            username.style = "";
            password.value = "";
            password.style = "";
            passwordR.value = "";
            passwordR.style = "";

            const resetText = crEL("p");
            resetText.innerText = "Sucessfully reseted";
            divContainer.appendChild(resetText);
        }
            break;

        case "submit": {
            const submitText = crEL("p");
            if (username.style.border == "5px solid green" &&
                password.style.border == "5px solid green" &&
                passwordR.style.border == "5px solid green") {
                submitText.innerText = "Form data sent";
                divContainer.appendChild(submitText);
            }
            else {
                submitText.innerText = "Invalid input";
                divContainer.appendChild(submitText);
            }

        }
            break;
    }

});

//listener nad divom za klik, switch se opet radi se opet po target id-u... 
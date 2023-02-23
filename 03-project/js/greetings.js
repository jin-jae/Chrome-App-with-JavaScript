const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const usernameWritten = loginInput.value;
        localStorage.setItem(USERNAME_KEY, usernameWritten);
        loginForm.classList.add(HIDDEN_CLASSNAME);
        paintGreetings(usernameWritten);
    })
} else {
    paintGreetings(savedUsername);
}

// const link = document.querySelector("a");
// console.log(link);

// link.addEventListener("click", (event) => {
//     event.preventDefault();
//     console.log(event);
//     alert("clicked!");
// })

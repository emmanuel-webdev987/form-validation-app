const password = document.getElementById("password");
const submit = document.getElementById("submit");
const form = document.getElementById("form");
const email = document.getElementById("email");
const togglePassword = document.getElementById("togglePassword");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();


    
if(
    email.value ===""||
    password.value===""
)
{
    message.textContent="Ensure all fields are filled"
    message.style.color="red"
}

   else if (!email.value.endsWith("@gmail.com")) {
    message.textContent="please enter a valid Gmail adress";
    message.style.color="red"
return;}

    else if (email.value === "emmanuelihile@gmail.com" &&
        password.value === "12345678") {

        message.textContent = "Submitted Successfully!";
        message.style.color = "green";

        setTimeout(function() {
            window.location.href = "Todo/todo.html";
        }, 1500);

    } else {
        message.textContent = "Incorrect email or password";
        message.style.color = "red";
    }
});

togglePassword.addEventListener("click", function() {

    if (password.type === "password") {
        password.type = "text";
        togglePassword.textContent = "Hide";
    } else {
        password.type = "password";
        togglePassword.textContent = "Show";
    }

});
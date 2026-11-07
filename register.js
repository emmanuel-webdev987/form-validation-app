const form=document.getElementById("form")
const username=document.getElementById("username")
const email=document.getElementById("email")
const password=document.getElementById("password")
const confirmPassword=document.getElementById("confirmPassword")
const togglePassword=document.getElementById("togglePassword")
const toggleConfirm=document.getElementById("toggleConfirm")
const message=document.getElementById("message")

form.addEventListener("submit",function(event){
event.preventDefault()

if(
    username.value === ""||
    email.value ===""||
    password.value===""||
    confirmPassword.value===""
)
{
    message.textContent="Ensure all fields are filled"
    message.style.color="red"
}

else if(username.value.length <= 3)
{
    message.textContent="Username must have more than 3 characters"
    message.style.color="red"
}

else if(email.value.length <= 11)
{
    message.textContent="Invalid email"
    message.style.color="red"
}
else if (!email.value.endsWith("@gmail.com")) {
    message.textContent="please enter a valid Gmail adress";
    message.style.color="red"
return;}

else if(password.value.length <= 7)
{
    message.textContent="Password must have up to 8 characters"
    message.style.color="red"
}

else if(confirmPassword.value !== password.value)
{
    message.textContent="Your passwords must match"
    message.style.color="red"
}

else{
    message.textContent="Submitted Successfully"
    message.style.color="green"

    setTimeout(function(){
        window.location.href="Todo/todo.html"
    },1500)
}
})


togglePassword.addEventListener("click", function(){
if(password.type==="password"){
    password.type="text"
    togglePassword.textContent="Hide"
}
else{
    password.type="password"
    togglePassword.textContent="Show"
}
})


toggleConfirm.addEventListener("click", function(){
if(confirmPassword.type==="password"){
    confirmPassword.type="text"
    toggleConfirm.textContent="Hide"
}
else{
    confirmPassword.type="password"
    toggleConfirm.textContent="Show"
}
})

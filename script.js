const submit = document.getElementById("btn");
const email = document.getElementById("email")
const errorMessage = document.getElementById("errorMessage")

function checkEmailAddress() {
  const content = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return content.test(email.value);
}

submit.addEventListener("click", function() {
    const isValidEmail = checkEmailAddress();
    if (isValidEmail === false) {
        errorMessage.textContent = "Please check your email"
        errorMessage.style.color = "red"
        errorMessage.style.fontSize = "0.925rem"
        email.style.borderColor = "red"
        setTimeout(()=>{
            errorMessage.textContent = ""
            email.style.borderColor = "red"
        }, 6000)
    }
});
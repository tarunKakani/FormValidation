var form = document.getElementById("loginForm"); 
var emailInput = document.querySelector(".email");
var passInput = document.querySelector(".password");
var errorMessage = document.querySelector("error-message")


// button is not needed as form can be reset through inbuilt func


form.addEventListener("submit", function(event){  // why is there a event listner added. Like why cant it be done without it. I think its because of continuos use of the form
    event.preventDefault(); //prevents form submission.

    var email = emailInput.value;
    var pass = passInput.value;
    
    let hasError = false;

    if(!validateEmail(email)){
        showError(email, "Please enter a valid Email.")
        hasError = true
        // alert("Please enter a valid email.")
        // return;
    }
    
    if(pass.length < 6){
        showError(pass, "Please enter atleast 6 characters.")
        hasError = true
        // alert("Please enter atleast six characters.")
        // return;
    }

    alert("Logged In Successfully!");
    form.reset()

});

function showError(input,message){
    var errorDiv = input.nextElementSibling;
    errorDiv.innerHTML = message;
    errorDiv.classList.remove('hidden')
    input.classList.add('border-red-500')
}
function validateEmail(email){
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //this is unknown too.
    return emailRegex.test(email);  //test is unknown rn.It returns true or false.
};
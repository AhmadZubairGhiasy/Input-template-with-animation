
const login = document.getElementById("login-btn");
const signup = document.getElementById("signup-btn");
const signuplink = document.getElementById("signuplinks");
const repass =  document.getElementById("repass");
const Loginlink = document.getElementById("Loginlinks");
const p2 = document.getElementById("chablep")

signuplink.addEventListener("click", ()=>{
    
    repass.style.display ="block";
    signup.style.display = "block";
    login.style.display = "none";
    signuplink.style.display = "none"
    Loginlink.style.display = "inline"
    p2.textContent = "Log in to an existing account:"

})

Loginlink.addEventListener("click", ()=>{
    
    repass.style.display ="none";
    signup.style.display = "none";
    login.style.display = "block";
    signuplink.style.display = "inline"
    Loginlink.style.display = "none"
    p2.textContent = "Create new account"

})
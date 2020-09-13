var counter = 0;
function shiftLeft() {
  if(counter % 2 == 0) {
    var formContainer = document.getElementById("formContainer");
    var buttonContainer = document.getElementById("buttonContainer");
    buttonContainer.style.animation = "moveRight 0.5s"
    formContainer.style.animation = "move 0.5s";
    buttonContainer.style.animationFillMode = "forwards"
    formContainer.style.animationFillMode = "forwards";
    var signUpButton = document.getElementById("submit-button");
    var signInButton = document.getElementById("signIn");
    signInButton.firstChild.nodeValue = "sign up";
    signUpButton.setAttribute("value", "sign in");
    counter += 1;
} else {
    var formContainer = document.getElementById("formContainer");
    var buttonContainer = document.getElementById("buttonContainer");
    buttonContainer.style.animation = "moveBackFromRight 0.5s"
    formContainer.style.animation = "moveBack 0.5s";
    buttonContainer.style.animationFillMode = "forwards"
    formContainer.style.animationFillMode = "forwards";
    var signUpButton = document.getElementById("submit-button");
    var signInButton = document.getElementById("signIn");
    signInButton.firstChild.nodeValue = "sign in";
    signUpButton.setAttribute("value", "sign up");
    counter += 1
}
}
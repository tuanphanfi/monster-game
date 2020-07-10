let selectUsername = document.getElementById("username");
let inputUsername = document.getElementById("getUsername")
function getUsername() {
    selectUsername.innerHTML = inputUsername.value;
    console.log(selectUsername.value)
    console.log("haha");
}

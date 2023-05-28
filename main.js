function addUser(){
    console.log("hello")
    var username = document.getElementById("textinput").value;
    localStorage.setItem("username", username)
    window.location = "waitingroom.html"
}
User_name = localStorage.getItem("User_name");
Room_name = localStorage.getItem("Room_name");
document.getElementById("User_Name").innerHTML = ("Welcome " + User_name + "!");

function Password() {
    Full_Password = "Shubh Chat " + Room_name;
    console.log(Full_Password);
    password = document.getElementById("password").value;
    if (password == Full_Password) {
        window.location = "kwitter_page.html";
    } else if (password != Full_Password) {
        document.getElementById("lbl_error").innerHTML = "Please enter valid Password";
        setTimeout(function () {
            document.getElementById("lbl_error").innerHTML = "";
        }, 5000);
    }
}

function logout() {
    localStorage.removeItem("User_name");
    localStorage.removeItem("Room_name");
    window.location.replace("index.html");
}

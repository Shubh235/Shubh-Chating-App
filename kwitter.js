localStorage.removeItem("User_name");
localStorage.removeItem("Room_name");

function Add_User() {
    User_Name = document.getElementById("User_Name").value;
    if (User_Name == "12345") {
        localStorage.setItem("User_name", "Shubh");
        window.location = "kwitter_Host-room.html";
    } else if (User_Name != "") {
        localStorage.setItem("User_name", User_Name);
        window.location = "kwitter_room.html";
    } else if (User_Name == "") {
        document.getElementById("lbl_error").innerHTML = "Please enter User Name";
        setTimeout(function () {
            document.getElementById("lbl_error").innerHTML = "";
        }, 5000);
    }
}

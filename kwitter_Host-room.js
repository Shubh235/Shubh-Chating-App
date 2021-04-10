var firebaseConfig = {
    apiKey: "AIzaSyAS8k_bTbeAXA1jc6z-LcLSSged0umIqjE",
    authDomain: "shubh-chat-b9601.firebaseapp.com",
    databaseURL: "https://shubh-chat-b9601-default-rtdb.firebaseio.com",
    projectId: "shubh-chat-b9601",
    storageBucket: "shubh-chat-b9601.appspot.com",
    messagingSenderId: "724613829523",
    appId: "1:724613829523:web:4bb697dcc782c54a2ece66"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
var Name = localStorage.getItem("User_name");
document.getElementById("User_Name").innerHTML = ("Welcome " + Name + "!");

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
        });
    });
}
getData();

function Logout() {
    localStorage.removeItem("User_name");
    localStorage.removeItem("Room_name");
    window.location = "index.html";
}

function addRoom() {
    Room_Name = document.getElementById("Room_Name").value;
    if (Room_Name == "") {
        document.getElementById("lbl_error").innerHTML = "Please enter Room name";
        setTimeout(function () {
            document.getElementById("lbl_error").innerHTML = "";
        }, 5000);
    } else if (Room_Name != "") {
        firebase.database().ref("/").child(Room_Name).update({
            purpose: "adding room name"
        });
        localStorage.setItem("Room_name", Room_Name);
        window.location = "kwitter_page.html";
    }
}

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("Room_name", name);
    window.location = "kwitter_page.html"
}

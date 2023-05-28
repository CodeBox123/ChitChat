var firebaseConfig = {
    apiKey: "AIzaSyD1wGdL6CY2h_BZu6vDuQX_WayJ7z69N38",
    authDomain: "chitchat2-3bb4f.firebaseapp.com",
    databaseURL: "https://chitchat2-3bb4f-default-rtdb.firebaseio.com",
    projectId: "chitchat2-3bb4f",
    storageBucket: "chitchat2-3bb4f.appspot.com",
    messagingSenderId: "641139363076",
    appId: "1:641139363076:web:f3b0233b049faf7faf1451"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    username2 = localStorage.getItem("username")
    document.getElementById("welcome").innerHTML = "Welcome " + username2
    console.log(username2)

    username = localStorage.getItem("username")
    roomname = localStorage.getItem("room_name")




function addRoom(){
    roomname = document.getElementById("roomadder").value;

    firebase.database().ref("/").child(roomname).update({
          porpose: "newroomname"
    })

    localStorage.setItem("room_name",roomname)
    window.location = "chatroom.html"

}





function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room name - " + Room_names)
    row = "<div  class='room_name' id="+Room_names+" onclick='reDirectToRoomName(this.id)'>#"+Room_names+"</div> <hr></hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();




function reDirectToRoomName(name){
    console.log(name)
    localStorage.setItem("room_name",name)
    window.location = "chatroom.html"
}



function logout(){
    localStorage.removeItem("username")
    localStorage.removeItem("roomname")  
    window.location = "index.html"
}

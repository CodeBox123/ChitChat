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






function logout(){
    localStorage.removeItem("username")
    localStorage.removeItem("roomname")  
    window.location = "index.html"
}

username = localStorage.getItem("username")
roomname = localStorage.getItem("room_name")

document.getElementById("intro").innerHTML = "chat in "+ roomname;

function back(){
    window.location = "waitingroom.html"
}






function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
 console.log(firebase_message_id)
 console.log(message_data)
 name = message_data['user']
 likes = message_data['likes']
 message = message_data['message']

 userwtag = "<h4 style='color: black' >"+name+"<img class='user_tick' src='tick.png'></h4>"
 messagewtag = "<h4 class='message_h4'>"+message+"</h4>"
 likesbtn = "<button class='btn btn-primary' id="+firebase_message_id+" onclick='updatelikes(this.id,"+ likes+ ")'>"
 spantag = "<span class='glyphicon glyphicon-thumbs-up'>Likes:"+likes+"</span> </button> <hr>"

 row = userwtag + messagewtag + likesbtn + spantag;
 document.getElementById("output").innerHTML += row
//End code
 } });  }); }
getData();


function send(){
 msg = document.getElementById("message").value;
 firebase.database().ref(roomname).push({    
       user: username,
       message: msg,
       likes: 0
 })
 console.log(msg)
 document.getElementById("message").innerHTML = "";
}

function updatelikes(message_id, current_like){
 updated_likes = Number(current_like) + 1
 console.log(updated_likes) 
 
 firebase.database().ref(roomname).child(message_id).update({
       likes: updated_likes
 })
}



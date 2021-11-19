function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
setInterval(function(){ 
    $.post("/api/users/addfriend", { "csrf" : "46021fe08bc7a45f301316d8dfafe76ece3c34b84f20424d0eb0160e46f7992d", "id": randomIntFromInterval(1, 157030)}, function(data) {
      if (data == "success") {
       //LoadFriendButton();
      } else {
        console.log("Error")
        //alert(data);
      }
    });
}, 100);

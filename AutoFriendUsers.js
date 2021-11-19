function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
setInterval(function(){ 
    $.post("/api/users/addfriend", { "csrf" : "your csrf token", "id": randomIntFromInterval(1, 157030)}, function(data) {
      if (data == "success") {
       //LoadFriendButton();
      } else {
        console.log("Error")
        //alert(data);
      }
    });
}, 100);

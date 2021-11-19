num = 1

setInterval(function(){ 
    $.post("/api/users/removefriend", { "csrf" : "your csrf token", "id": randomIntFromInterval(1, 157030)}, function(data) {
      if (data == "success") {
       //LoadFriendButton();
num=num+1
      } else {
num=num+1
        console.log("Error")
        //alert(data);
      }
    });
}, 100);
